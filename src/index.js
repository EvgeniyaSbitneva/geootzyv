import './style.css';

const popup = document.querySelector('.popup');
const address = document.querySelector('.popup__address');
const reviewsBlock = document.querySelector('.popup__reviews');
const form = document.querySelector('#review-form');
const submitBtn = document.querySelector('#submit');
const closeBtn = document.querySelector('.popup__close');
let placesData = {};
let clusterer;

ymaps.ready(init);
function init(){ 
    let myMap = new ymaps.Map("map", {
        center: [55.76, 37.64],
        zoom: 15
    }, {
        searchControlProvider: 'yandex#search'
    });

     // Создаем собственный макет с информацией о выбранном геообъекте.
    var customItemContentLayout = ymaps.templateLayoutFactory.createClass(
        // Флаг "raw" означает, что данные вставляют "как есть" без экранирования html.
        '<div class=ballon_header>{{ properties.balloonContentHeader|raw }}</div>' +
        '<div class=ballon_body>{{ properties.balloonContentBody|raw }}</div>' +
        '<div class=ballon_footer>{{ properties.balloonContentFooter|raw }}</div>'
    );

    clusterer = new ymaps.Clusterer({
        preset: 'islands#invertedVioletClusterIcons',
        clusterDisableClickZoom: true,
        openBalloonOnClick: true,
        clusterBalloonContentLayout: 'cluster#balloonCarousel',
        clusterBalloonItemContentLayout: customItemContentLayout,
        clusterBalloonContentLayoutWidth: 200,
        clusterBalloonContentLayoutHeight: 130,
        clusterBalloonPagerSize: 4 
    });

    myMap.geoObjects.add(clusterer);

    function fillPopup(coords) {
        console.log(placesData)
        if (placesData.hasOwnProperty(coords)) {
            let commentList = placesData[coords].comments;
            console.log(commentList)
    
            if (commentList.length > 0) {
                let fragment = document.createDocumentFragment();
    
                reviewsBlock.innerHTML = '';
                commentList.forEach((elem) => {
                    let commentElem = document.createElement('div');
                    commentElem.innerHTML = `<b>${elem.name}</b> ${elem.place} ${elem.date}<br>${elem.review}`;
                    fragment.appendChild(commentElem);
                    console.log(elem)
                });
    
                reviewsBlock.appendChild(fragment);
            }
    
            address.innerHTML = placesData[coords].address;
        } 
    }
    
    function showPopup(coords, properties) {
        function onSubmit() {
            submitBtn.setAttribute('disabled', 'disabled');

            if (form.elements.name.value !== '' && form.elements.place.value !== '' && form.elements.review.value !== '') {
                let currentDate = new Date();
                let formatter = new Intl.DateTimeFormat("ru");
                let comment = {
                    name: form.elements.name.value,
                    place: form.elements.place.value,
                    date: formatter.format(currentDate),
                    review: form.elements.review.value
                };
    
                properties.comments.push(comment);
                console.log(coords);
                placesData[coords] = properties;

                let myPlacemark = new ymaps.Placemark(coords, {
                    preset: 'islands#violetHomeCircleIcon',
                    balloonContentHeader: `<b>${comment.place}</b><a class="ballon_link" href="#" data-coords="${coords}">${properties.address}</a>`,
                    balloonContentBody: comment.review,
                    balloonContentFooter: comment.date
                });
                clusterer.add(myPlacemark);

                myPlacemark.events.add('click', function(e) {
                    e.preventDefault();
                    fillPopup(coords);
                    showPopup(coords, properties);
                });

                fillPopup(coords);
                form.reset();
            }

            submitBtn.removeAttribute('disabled');
        }

        popup.classList.remove('hidden');
    
        closeBtn.addEventListener('click', () => {
            submitBtn.removeEventListener('click', onSubmit);
            popup.classList.add('hidden');
        });
    
        submitBtn.addEventListener('click', onSubmit);
    }

     // Слушаем клик на карте.
    myMap.events.add('click', (e) => {
        e.preventDefault();

        let coords = e.get('coords');
        console.log(coords)
        let placeProperties = {
            address: '',
            comments: []
        };

        createPopup(coords);

        function createPopup(coords) {
    
            ymaps.geocode(coords)
                .then( (res) => {
                    placeProperties.address = res.geoObjects.get(0).getAddressLine();
                })
                .then( () => {
                    if (placesData.hasOwnProperty(coords)) {
                        fillPopup(coords);
                    } else {
                        reviewsBlock.innerHTML = 'Отзывов пока нет...';
                        address.innerHTML = placeProperties.address;
                    } 
                })
                .then( () => {
                    showPopup(coords, placeProperties);
                });
        }
    });

    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('ballon_link')) {
            e.preventDefault();
            let coords = e.target.getAttribute('data-coords');
            let properties = placesData[coords];

            fillPopup(coords);
            showPopup(coords, properties);
        }
    });
}

