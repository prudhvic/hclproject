import React, { useEffect, useState } from 'react'
import { fetchRestaurants } from '../api'
import RestaurantCard from '../components/RestaurantCard'
import Loader from '../components/Loader'
let obj = {
    "status": true,
    "message": "Success",
    "timestamp": 1664130210908,
    "data": {
        "totalRecords": "13862",
        "totalPages": 463,
        "data": [
            {
                "heroImgUrl": "https://media-cdn.tripadvisor.com/media/photo-s/0d/13/75/e0/live-teppanyaki-counter.jpg",
                "heroImgRawHeight": 366,
                "heroImgRawWidth": 550,
                "squareImgUrl": "",
                "squareImgRawLength": 0,
                "locationId": 10338075,
                "name": "EAST-EAST ASIAN SPICE TRAIL",
                "averageRating": 5,
                "userReviewCount": 510,
                "currentOpenStatusCategory": "CLOSING",
                "currentOpenStatusText": "Closes in 7 min",
                "establishmentTypeAndCuisineTags": [
                    "Chinese",
                    "Japanese"
                ],
                "priceTag": "$$$$",
                "offers": {
                    "slot1Offer": null,
                    "slot2Offer": null
                },
                "hasMenu": false,
                "menuUrl": null,
                "isDifferentGeo": false,
                "parentGeoName": "Mumbai",
                "distanceTo": "",
                "reviewSnippets": {
                    "reviewSnippetsList": [
                        {
                            "reviewText": "&#x201c;Best East <b>Asian food</b> in the city&#x201d;",
                            "reviewUrl": "/ShowUserReviews-g304554-d10338075-r822095417-EAST_EAST_ASIAN_SPICE_TRAIL-Mumbai_Maharashtra.html"
                        },
                        {
                            "reviewText": "&#x201c;... dimsums and <b>Tofu</b> tossed in exotic v...&#x201d;",
                            "reviewUrl": "/ShowUserReviews-g304554-d10338075-r838730926-EAST_EAST_ASIAN_SPICE_TRAIL-Mumbai_Maharashtra.html"
                        }
                    ]
                },
                "awardInfo": null,
                "isLocalChefItem": false,
                "isPremium": false,
                "isStoryboardPublished": false
            },
            {
                "heroImgUrl": "https://media-cdn.tripadvisor.com/media/photo-s/0e/de/2b/38/photo2jpg.jpg",
                "heroImgRawHeight": 413,
                "heroImgRawWidth": 550,
                "squareImgUrl": "",
                "squareImgRawLength": 0,
                "locationId": 8010527,
                "name": "Saptami",
                "averageRating": 4.5,
                "userReviewCount": 698,
                "currentOpenStatusCategory": "CLOSED",
                "currentOpenStatusText": "Closed Now",
                "establishmentTypeAndCuisineTags": [
                    "Indian",
                    "Asian"
                ],
                "priceTag": "$$$$",
                "offers": {
                    "slot1Offer": null,
                    "slot2Offer": null
                },
                "hasMenu": false,
                "menuUrl": null,
                "isDifferentGeo": false,
                "parentGeoName": "Mumbai",
                "distanceTo": "",
                "reviewSnippets": {
                    "reviewSnippetsList": [
                        {
                            "reviewText": "&#x201c;... Thai Yellow <b>Curry</b>, Plum Chilli Pota...&#x201d;",
                            "reviewUrl": "/ShowUserReviews-g304554-d8010527-r746155519-Saptami-Mumbai_Maharashtra.html"
                        },
                        {
                            "reviewText": "&#x201c;... green Thai <b>curry</b> , the vegetable sp...&#x201d;",
                            "reviewUrl": "/ShowUserReviews-g304554-d8010527-r730520675-Saptami-Mumbai_Maharashtra.html"
                        }
                    ]
                },
                "awardInfo": null,
                "isLocalChefItem": false,
                "isPremium": false,
                "isStoryboardPublished": false
            },
            {
                "heroImgUrl": "https://media-cdn.tripadvisor.com/media/photo-s/0b/55/a9/05/mabruk-the-mediterranean.jpg",
                "heroImgRawHeight": 367,
                "heroImgRawWidth": 550,
                "squareImgUrl": "",
                "squareImgRawLength": 0,
                "locationId": 1008614,
                "name": "Mabruk",
                "averageRating": 5,
                "userReviewCount": 533,
                "currentOpenStatusCategory": "CLOSED",
                "currentOpenStatusText": "Closed Now",
                "establishmentTypeAndCuisineTags": [
                    "Lebanese",
                    "Mediterranean"
                ],
                "priceTag": "$$$$",
                "offers": {
                    "slot1Offer": null,
                    "slot2Offer": null
                },
                "hasMenu": false,
                "menuUrl": null,
                "isDifferentGeo": false,
                "parentGeoName": "Mumbai",
                "distanceTo": "",
                "reviewSnippets": {
                    "reviewSnippetsList": [
                        {
                            "reviewText": "&#x201c;Awesome place&#x201d;",
                            "reviewUrl": "/ShowUserReviews-g304554-d1008614-r861404189-Mabruk-Mumbai_Maharashtra.html"
                        },
                        {
                            "reviewText": "&#x201c;excellent service&#x201d;",
                            "reviewUrl": "/ShowUserReviews-g304554-d1008614-r861240758-Mabruk-Mumbai_Maharashtra.html"
                        }
                    ]
                },
                "awardInfo": null,
                "isLocalChefItem": false,
                "isPremium": false,
                "isStoryboardPublished": false
            },
            {
                "heroImgUrl": "https://media-cdn.tripadvisor.com/media/photo-s/0d/6c/8a/fc/salad-counter.jpg",
                "heroImgRawHeight": 367,
                "heroImgRawWidth": 550,
                "squareImgUrl": "",
                "squareImgRawLength": 0,
                "locationId": 2034948,
                "name": "The Earth Plate",
                "averageRating": 5,
                "userReviewCount": 709,
                "currentOpenStatusCategory": "CLOSING",
                "currentOpenStatusText": "Closes in 6 min",
                "establishmentTypeAndCuisineTags": [
                    "Indian",
                    "International"
                ],
                "priceTag": "$$$$",
                "offers": {
                    "slot1Offer": null,
                    "slot2Offer": null
                },
                "hasMenu": false,
                "menuUrl": null,
                "isDifferentGeo": false,
                "parentGeoName": "Mumbai",
                "distanceTo": "",
                "reviewSnippets": {
                    "reviewSnippetsList": [
                        {
                            "reviewText": "&#x201c;Amazing food, loved the <b>pasta</b>, very tasty and perfect blend of flavours.&#x201d;",
                            "reviewUrl": "/ShowUserReviews-g304554-d2034948-r814544524-The_Earth_Plate-Mumbai_Maharashtra.html"
                        },
                        {
                            "reviewText": "&#x201c;White sauce <b>pasta</b>, paneer chilly and even the chocolate icecream was excellent.&#x201d;",
                            "reviewUrl": "/ShowUserReviews-g304554-d2034948-r807290682-The_Earth_Plate-Mumbai_Maharashtra.html"
                        }
                    ]
                },
                "awardInfo": null,
                "isLocalChefItem": false,
                "isPremium": false,
                "isStoryboardPublished": false
            },
            {
                "heroImgUrl": "https://media-cdn.tripadvisor.com/media/photo-s/0b/58/1d/b7/namak.jpg",
                "heroImgRawHeight": 378,
                "heroImgRawWidth": 550,
                "squareImgUrl": "",
                "squareImgRawLength": 0,
                "locationId": 2034920,
                "name": "Namak",
                "averageRating": 5,
                "userReviewCount": 571,
                "currentOpenStatusCategory": "CLOSING",
                "currentOpenStatusText": "Closes in 7 min",
                "establishmentTypeAndCuisineTags": [
                    "Indian"
                ],
                "priceTag": "$$$$",
                "offers": {
                    "slot1Offer": null,
                    "slot2Offer": null
                },
                "hasMenu": false,
                "menuUrl": null,
                "isDifferentGeo": false,
                "parentGeoName": "Mumbai",
                "distanceTo": "",
                "reviewSnippets": {
                    "reviewSnippetsList": [
                        {
                            "reviewText": "&#x201c;It was to be honest one of the most delicious chicken <b>curry</b> I have had.&#x201d;",
                            "reviewUrl": "/ShowUserReviews-g304554-d2034920-r785853798-Namak-Mumbai_Maharashtra.html"
                        },
                        {
                            "reviewText": "&#x201c;... had well balanced spices, chicken pieces and the paste of <b>curry</b> to blend it.&#x201d;",
                            "reviewUrl": "/ShowUserReviews-g304554-d2034920-r779048768-Namak-Mumbai_Maharashtra.html"
                        }
                    ]
                },
                "awardInfo": null,
                "isLocalChefItem": false,
                "isPremium": false,
                "isStoryboardPublished": false
            },
            {
                "heroImgUrl": "https://media-cdn.tripadvisor.com/media/photo-s/06/f1/95/d3/peshawri.jpg",
                "heroImgRawHeight": 412,
                "heroImgRawWidth": 550,
                "squareImgUrl": "",
                "squareImgRawLength": 0,
                "locationId": 1014520,
                "name": "Peshawri",
                "averageRating": 4.5,
                "userReviewCount": 2080,
                "currentOpenStatusCategory": "CLOSED",
                "currentOpenStatusText": "Closed Now",
                "establishmentTypeAndCuisineTags": [
                    "Indian",
                    "Healthy"
                ],
                "priceTag": "$$$$",
                "offers": {
                    "slot1Offer": null,
                    "slot2Offer": null
                },
                "hasMenu": false,
                "menuUrl": null,
                "isDifferentGeo": false,
                "parentGeoName": "Mumbai",
                "distanceTo": "",
                "reviewSnippets": {
                    "reviewSnippetsList": [
                        {
                            "reviewText": "&#x201c;Food was excellent as well especially the chicken and <b>lamb</b> leg that we have had.&#x201d;",
                            "reviewUrl": "/ShowUserReviews-g304554-d1014520-r850324341-Peshawri-Mumbai_Maharashtra.html"
                        },
                        {
                            "reviewText": "&#x201c;I thoroughly enjoyed the daal and naan however my favorite dish was the <b>lamb</b>...&#x201d;",
                            "reviewUrl": "/ShowUserReviews-g304554-d1014520-r849936647-Peshawri-Mumbai_Maharashtra.html"
                        }
                    ]
                },
                "awardInfo": null,
                "isLocalChefItem": false,
                "isPremium": false,
                "isStoryboardPublished": false
            },
            {
                "heroImgUrl": "https://media-cdn.tripadvisor.com/media/photo-s/25/27/74/e0/caption.jpg",
                "heroImgRawHeight": 450,
                "heroImgRawWidth": 360,
                "squareImgUrl": "",
                "squareImgRawLength": 0,
                "locationId": 21511592,
                "name": "Rasoi Kitchen & Bar",
                "averageRating": 5,
                "userReviewCount": 125,
                "currentOpenStatusCategory": "",
                "currentOpenStatusText": "",
                "establishmentTypeAndCuisineTags": [
                    "Indian",
                    "Middle Eastern"
                ],
                "priceTag": "$$ - $$$",
                "offers": {
                    "slot1Offer": null,
                    "slot2Offer": null
                },
                "hasMenu": false,
                "menuUrl": null,
                "isDifferentGeo": false,
                "parentGeoName": "Mumbai",
                "distanceTo": "",
                "reviewSnippets": {
                    "reviewSnippetsList": [
                        {
                            "reviewText": "&#x201c;The BURNT GARLIC CHICKEN <b>FRIED RICE</b> came a big bowl with a side of schezwan c...&#x201d;",
                            "reviewUrl": "/ShowUserReviews-g304554-d21511592-r857939395-Rasoi_Kitchen_Bar-Mumbai_Maharashtra.html"
                        },
                        {
                            "reviewText": "&#x201c;- Mains 1. Brunt Garlic <b>Fried Rice</b> Street style <b>fried rice</b> with flavour of br...&#x201d;",
                            "reviewUrl": "/ShowUserReviews-g304554-d21511592-r857912832-Rasoi_Kitchen_Bar-Mumbai_Maharashtra.html"
                        }
                    ]
                },
                "awardInfo": null,
                "isLocalChefItem": false,
                "isPremium": false,
                "isStoryboardPublished": false
            },
            {
                "heroImgUrl": "https://media-cdn.tripadvisor.com/media/photo-s/19/3c/c2/49/interiors-at-k-k.jpg",
                "heroImgRawHeight": 413,
                "heroImgRawWidth": 550,
                "squareImgUrl": "",
                "squareImgRawLength": 0,
                "locationId": 804433,
                "name": "Kebabs & Kurries",
                "averageRating": 5,
                "userReviewCount": 956,
                "currentOpenStatusCategory": "CLOSED",
                "currentOpenStatusText": "Closed Now",
                "establishmentTypeAndCuisineTags": [
                    "Indian"
                ],
                "priceTag": "$$$$",
                "offers": {
                    "slot1Offer": null,
                    "slot2Offer": null
                },
                "hasMenu": false,
                "menuUrl": null,
                "isDifferentGeo": false,
                "parentGeoName": "Mumbai",
                "distanceTo": "",
                "reviewSnippets": {
                    "reviewSnippetsList": [
                        {
                            "reviewText": "&#x201c;Dinner at kabab and <b>curry</b>&#x201d;",
                            "reviewUrl": "/ShowUserReviews-g304554-d804433-r825774234-Kebabs_Kurries-Mumbai_Maharashtra.html"
                        },
                        {
                            "reviewText": "&#x201c;Kabab and <b>curry</b> ITC grand central parel mumbai&#x201d;",
                            "reviewUrl": "/ShowUserReviews-g304554-d804433-r800628394-Kebabs_Kurries-Mumbai_Maharashtra.html"
                        }
                    ]
                },
                "awardInfo": null,
                "isLocalChefItem": false,
                "isPremium": false,
                "isStoryboardPublished": false
            },
            {
                "heroImgUrl": "https://media-cdn.tripadvisor.com/media/photo-p/11/aa/49/ad/img20171221202836-largejpg.jpg",
                "heroImgRawHeight": 733,
                "heroImgRawWidth": 550,
                "squareImgUrl": "",
                "squareImgRawLength": 0,
                "locationId": 13325105,
                "name": "Tanatan",
                "averageRating": 5,
                "userReviewCount": 352,
                "currentOpenStatusCategory": "",
                "currentOpenStatusText": "",
                "establishmentTypeAndCuisineTags": [
                    "Indian",
                    "Bar"
                ],
                "priceTag": "$$ - $$$",
                "offers": {
                    "slot1Offer": null,
                    "slot2Offer": null
                },
                "hasMenu": false,
                "menuUrl": null,
                "isDifferentGeo": false,
                "parentGeoName": "Mumbai",
                "distanceTo": "",
                "reviewSnippets": {
                    "reviewSnippetsList": [
                        {
                            "reviewText": "&#x201c;We had a great time here dining and gorging on our favorite <b>Indian</b> delicacies!&#x201d;",
                            "reviewUrl": "/ShowUserReviews-g304554-d13325105-r856637754-Tanatan-Mumbai_Maharashtra.html"
                        },
                        {
                            "reviewText": "&#x201c;... went well with fresh raita and <b>salad</b> (Highly recommended) Later we ask fo...&#x201d;",
                            "reviewUrl": "/ShowUserReviews-g304554-d13325105-r846478053-Tanatan-Mumbai_Maharashtra.html"
                        }
                    ]
                },
                "awardInfo": null,
                "isLocalChefItem": false,
                "isPremium": false,
                "isStoryboardPublished": false
            },
            {
                "heroImgUrl": "https://media-cdn.tripadvisor.com/media/photo-s/1b/50/97/63/friends-having-a-good.jpg",
                "heroImgRawHeight": 367,
                "heroImgRawWidth": 550,
                "squareImgUrl": "",
                "squareImgRawLength": 0,
                "locationId": 15223662,
                "name": "Ummrao",
                "averageRating": 5,
                "userReviewCount": 242,
                "currentOpenStatusCategory": "CLOSED",
                "currentOpenStatusText": "Closed Now",
                "establishmentTypeAndCuisineTags": [
                    "Indian"
                ],
                "priceTag": "$$$$",
                "offers": {
                    "slot1Offer": null,
                    "slot2Offer": null
                },
                "hasMenu": true,
                "menuUrl": "https://lnk.bio/courtyardmumbai",
                "isDifferentGeo": false,
                "parentGeoName": "Mumbai",
                "distanceTo": "",
                "reviewSnippets": {
                    "reviewSnippetsList": [
                        {
                            "reviewText": "&#x201c;... black pepper <b>prawns</b>, Ummro avatar-e...&#x201d;",
                            "reviewUrl": "/ShowUserReviews-g304554-d15223662-r824436749-Ummrao-Mumbai_Maharashtra.html"
                        },
                        {
                            "reviewText": "&#x201c;... was dum biryani which had <b>prawns</b> too.&#x201d;",
                            "reviewUrl": "/ShowUserReviews-g304554-d15223662-r824214857-Ummrao-Mumbai_Maharashtra.html"
                        }
                    ]
                },
                "awardInfo": null,
                "isLocalChefItem": false,
                "isPremium": false,
                "isStoryboardPublished": false
            },
            {
                "heroImgUrl": "https://media-cdn.tripadvisor.com/media/photo-s/19/4c/ca/df/img-20190916-150840-largejpg.jpg",
                "heroImgRawHeight": 413,
                "heroImgRawWidth": 550,
                "squareImgUrl": "",
                "squareImgRawLength": 0,
                "locationId": 15532332,
                "name": "Manuhaar- The Taste of Tradition",
                "averageRating": 5,
                "userReviewCount": 369,
                "currentOpenStatusCategory": "CLOSED",
                "currentOpenStatusText": "Closed Now",
                "establishmentTypeAndCuisineTags": [
                    "Indian"
                ],
                "priceTag": "$$$$",
                "offers": {
                    "slot1Offer": null,
                    "slot2Offer": null
                },
                "hasMenu": false,
                "menuUrl": null,
                "isDifferentGeo": false,
                "parentGeoName": "Mumbai",
                "distanceTo": "",
                "reviewSnippets": {
                    "reviewSnippetsList": [
                        {
                            "reviewText": "&#x201c;Amazing food&#x201d;",
                            "reviewUrl": "/ShowUserReviews-g304554-d15532332-r833036052-Manuhaar_The_Taste_of_Tradition-Mumbai_Maharashtra.html"
                        },
                        {
                            "reviewText": "&#x201c;Best food&#x201d;",
                            "reviewUrl": "/ShowUserReviews-g304554-d15532332-r830934884-Manuhaar_The_Taste_of_Tradition-Mumbai_Maharashtra.html"
                        }
                    ]
                },
                "awardInfo": null,
                "isLocalChefItem": false,
                "isPremium": false,
                "isStoryboardPublished": false
            },
            {
                "heroImgUrl": "https://media-cdn.tripadvisor.com/media/photo-s/1a/95/35/ca/img-20200112-052117-459.jpg",
                "heroImgRawHeight": 413,
                "heroImgRawWidth": 550,
                "squareImgUrl": "",
                "squareImgRawLength": 0,
                "locationId": 19428928,
                "name": "Tanatan",
                "averageRating": 5,
                "userReviewCount": 206,
                "currentOpenStatusCategory": "",
                "currentOpenStatusText": "",
                "establishmentTypeAndCuisineTags": [
                    "Indian"
                ],
                "priceTag": "$$$$",
                "offers": {
                    "slot1Offer": null,
                    "slot2Offer": null
                },
                "hasMenu": false,
                "menuUrl": null,
                "isDifferentGeo": false,
                "parentGeoName": "Mumbai",
                "distanceTo": "",
                "reviewSnippets": {
                    "reviewSnippetsList": [
                        {
                            "reviewText": "&#x201c;Fish <b>curry</b> was made to perfection which really goes with coconut rice.&#x201d;",
                            "reviewUrl": "/ShowUserReviews-g304554-d19428928-r846373439-Tanatan-Mumbai_Maharashtra.html"
                        },
                        {
                            "reviewText": "&#x201c;Rajni Goes Wild (Must Try) Kerala veg <b>curry</b> which had french beans, cauliflow...&#x201d;",
                            "reviewUrl": "/ShowUserReviews-g304554-d19428928-r844933247-Tanatan-Mumbai_Maharashtra.html"
                        }
                    ]
                },
                "awardInfo": null,
                "isLocalChefItem": false,
                "isPremium": false,
                "isStoryboardPublished": false
            },
            {
                "heroImgUrl": "https://media-cdn.tripadvisor.com/media/photo-p/16/e9/d3/02/yeda-republic.jpg",
                "heroImgRawHeight": 735,
                "heroImgRawWidth": 550,
                "squareImgUrl": "",
                "squareImgRawLength": 0,
                "locationId": 16845556,
                "name": "Yeda Republic",
                "averageRating": 5,
                "userReviewCount": 169,
                "currentOpenStatusCategory": "OPEN",
                "currentOpenStatusText": "Open Now",
                "establishmentTypeAndCuisineTags": [
                    "Indian",
                    "Bar"
                ],
                "priceTag": "$$ - $$$",
                "offers": {
                    "slot1Offer": null,
                    "slot2Offer": null
                },
                "hasMenu": false,
                "menuUrl": null,
                "isDifferentGeo": false,
                "parentGeoName": "Mumbai",
                "distanceTo": "",
                "reviewSnippets": {
                    "reviewSnippetsList": [
                        {
                            "reviewText": "&#x201c;Yeda fire wings- <b>Chicken wings</b> is such a great delicacy and this place has ve...&#x201d;",
                            "reviewUrl": "/ShowUserReviews-g304554-d16845556-r857086762-Yeda_Republic-Mumbai_Maharashtra.html"
                        },
                        {
                            "reviewText": "&#x201c;Main course Schezwan <b>fried rice</b>.&#x201d;",
                            "reviewUrl": "/ShowUserReviews-g304554-d16845556-r848008132-Yeda_Republic-Mumbai_Maharashtra.html"
                        }
                    ]
                },
                "awardInfo": null,
                "isLocalChefItem": false,
                "isPremium": false,
                "isStoryboardPublished": false
            },
            {
                "heroImgUrl": "https://media-cdn.tripadvisor.com/media/photo-s/1a/03/7b/5b/gallery-cafe-the-global.jpg",
                "heroImgRawHeight": 450,
                "heroImgRawWidth": 457,
                "squareImgUrl": "",
                "squareImgRawLength": 0,
                "locationId": 17609451,
                "name": "Gallery Cafe",
                "averageRating": 5,
                "userReviewCount": 212,
                "currentOpenStatusCategory": "CLOSING",
                "currentOpenStatusText": "Closes in 6 min",
                "establishmentTypeAndCuisineTags": [
                    "Indian",
                    "Asian"
                ],
                "priceTag": "$$ - $$$",
                "offers": {
                    "slot1Offer": null,
                    "slot2Offer": null
                },
                "hasMenu": true,
                "menuUrl": "https://www.zomato.com/mumbai/gallery-caf%25C3%25A9-near-andheri-east-station/menu",
                "isDifferentGeo": false,
                "parentGeoName": "Mumbai",
                "distanceTo": "",
                "reviewSnippets": {
                    "reviewSnippetsList": [
                        {
                            "reviewText": "&#x201c;... breads, Hummus w Pita Bread, Corn <b>salad</b>, Greek <b>Salad</b> and Watermelon <b>Salad</b>.&#x201d;",
                            "reviewUrl": "/ShowUserReviews-g304554-d17609451-r843257565-Gallery_Cafe-Mumbai_Maharashtra.html"
                        },
                        {
                            "reviewText": "&#x201c;i.e <b>Fish Curry</b>, Hyderabadi Chicken, Paneer Tikka, etcetera etc.&#x201d;",
                            "reviewUrl": "/ShowUserReviews-g304554-d17609451-r842777562-Gallery_Cafe-Mumbai_Maharashtra.html"
                        }
                    ]
                },
                "awardInfo": null,
                "isLocalChefItem": false,
                "isPremium": false,
                "isStoryboardPublished": false
            },
            {
                "heroImgUrl": "https://media-cdn.tripadvisor.com/media/photo-s/02/b5/66/a5/pan-asian.jpg",
                "heroImgRawHeight": 450,
                "heroImgRawWidth": 337,
                "squareImgUrl": "",
                "squareImgRawLength": 0,
                "locationId": 809446,
                "name": "Pan Asian",
                "averageRating": 5,
                "userReviewCount": 396,
                "currentOpenStatusCategory": "CLOSED",
                "currentOpenStatusText": "Closed Now",
                "establishmentTypeAndCuisineTags": [
                    "Chinese",
                    "Japanese"
                ],
                "priceTag": "$$$$",
                "offers": {
                    "slot1Offer": null,
                    "slot2Offer": null
                },
                "hasMenu": false,
                "menuUrl": null,
                "isDifferentGeo": false,
                "parentGeoName": "Mumbai",
                "distanceTo": "",
                "reviewSnippets": {
                    "reviewSnippetsList": [
                        {
                            "reviewText": "&#x201c;Loved the food and ambience..!! Tempura prawns and <b>sushi</b> was soo amazing.. Ma...&#x201d;",
                            "reviewUrl": "/ShowUserReviews-g304554-d809446-r851103273-Pan_Asian-Mumbai_Maharashtra.html"
                        },
                        {
                            "reviewText": "&#x201c;<b>Dim sum</b> ======= Here chef liang has given a twist to the edamame .&#x201d;",
                            "reviewUrl": "/ShowUserReviews-g304554-d809446-r849602566-Pan_Asian-Mumbai_Maharashtra.html"
                        }
                    ]
                },
                "awardInfo": null,
                "isLocalChefItem": false,
                "isPremium": false,
                "isStoryboardPublished": false
            },
            {
                "heroImgUrl": "https://media-cdn.tripadvisor.com/media/photo-s/23/67/e1/92/fiona.jpg",
                "heroImgRawHeight": 412,
                "heroImgRawWidth": 550,
                "squareImgUrl": "",
                "squareImgRawLength": 0,
                "locationId": 21387580,
                "name": "Fiona",
                "averageRating": 5,
                "userReviewCount": 281,
                "currentOpenStatusCategory": "CLOSING",
                "currentOpenStatusText": "Closes in 6 min",
                "establishmentTypeAndCuisineTags": [
                    "Italian",
                    "Chinese"
                ],
                "priceTag": "$$ - $$$",
                "offers": {
                    "slot1Offer": null,
                    "slot2Offer": null
                },
                "hasMenu": false,
                "menuUrl": null,
                "isDifferentGeo": false,
                "parentGeoName": "Mumbai",
                "distanceTo": "",
                "reviewSnippets": {
                    "reviewSnippetsList": [
                        {
                            "reviewText": "&#x201c;Great selection of <b>Indian</b> and International cuisine.&#x201d;",
                            "reviewUrl": "/ShowUserReviews-g304554-d21387580-r840749356-Fiona-Mumbai_Maharashtra.html"
                        },
                        {
                            "reviewText": "&#x201c;... were some clear winners such as the chaat counter, Thai fish <b>curry</b> and daal.&#x201d;",
                            "reviewUrl": "/ShowUserReviews-g304554-d21387580-r825917721-Fiona-Mumbai_Maharashtra.html"
                        }
                    ]
                },
                "awardInfo": null,
                "isLocalChefItem": false,
                "isPremium": false,
                "isStoryboardPublished": false
            },
            {
                "heroImgUrl": "https://media-cdn.tripadvisor.com/media/photo-s/19/3c/bf/71/ambiance-at-shanghai.jpg",
                "heroImgRawHeight": 367,
                "heroImgRawWidth": 550,
                "squareImgUrl": "",
                "squareImgRawLength": 0,
                "locationId": 1097143,
                "name": "Shanghai Club",
                "averageRating": 4.5,
                "userReviewCount": 278,
                "currentOpenStatusCategory": "CLOSED",
                "currentOpenStatusText": "Closed Now",
                "establishmentTypeAndCuisineTags": [
                    "Chinese",
                    "Asian"
                ],
                "priceTag": "$$$$",
                "offers": {
                    "slot1Offer": null,
                    "slot2Offer": null
                },
                "hasMenu": false,
                "menuUrl": null,
                "isDifferentGeo": false,
                "parentGeoName": "Mumbai",
                "distanceTo": "",
                "reviewSnippets": {
                    "reviewSnippetsList": [
                        {
                            "reviewText": "&#x201c;I had the basil fried <b>rice</b> and lobster.&#x201d;",
                            "reviewUrl": "/ShowUserReviews-g304554-d1097143-r821793088-Shanghai_Club-Mumbai_Maharashtra.html"
                        },
                        {
                            "reviewText": "&#x201c;love the way the made my mocktail twisted <b>Dal</b> was owesome will come back soon.&#x201d;",
                            "reviewUrl": "/ShowUserReviews-g304554-d1097143-r844955641-Shanghai_Club-Mumbai_Maharashtra.html"
                        }
                    ]
                },
                "awardInfo": null,
                "isLocalChefItem": false,
                "isPremium": false,
                "isStoryboardPublished": false
            },
            {
                "heroImgUrl": "https://media-cdn.tripadvisor.com/media/photo-w/05/a4/79/b6/peshwa-pavilion.jpg",
                "heroImgRawHeight": 1365,
                "heroImgRawWidth": 1024,
                "squareImgUrl": "",
                "squareImgRawLength": 0,
                "locationId": 5913048,
                "name": "Peshwa Pavilion",
                "averageRating": 5,
                "userReviewCount": 1154,
                "currentOpenStatusCategory": "CLOSED",
                "currentOpenStatusText": "Closed Now",
                "establishmentTypeAndCuisineTags": [
                    "Indian",
                    "Asian"
                ],
                "priceTag": "$$$$",
                "offers": {
                    "slot1Offer": null,
                    "slot2Offer": null
                },
                "hasMenu": false,
                "menuUrl": null,
                "isDifferentGeo": false,
                "parentGeoName": "Mumbai",
                "distanceTo": "",
                "reviewSnippets": {
                    "reviewSnippetsList": [
                        {
                            "reviewText": "&#x201c;<b>Excellent food and service</b>&#x201d;",
                            "reviewUrl": "/ShowUserReviews-g304554-d5913048-r736705628-Peshwa_Pavilion-Mumbai_Maharashtra.html"
                        },
                        {
                            "reviewText": "&#x201c;The food itself was delicious: for me the Eggs Sunrise and Butter plain <b>Dosa</b>...&#x201d;",
                            "reviewUrl": "/ShowUserReviews-g304554-d5913048-r852926875-Peshwa_Pavilion-Mumbai_Maharashtra.html"
                        }
                    ]
                },
                "awardInfo": null,
                "isLocalChefItem": false,
                "isPremium": false,
                "isStoryboardPublished": false
            },
            {
                "heroImgUrl": "https://media-cdn.tripadvisor.com/media/photo-s/21/59/55/0f/by-the-mekong-lounge.jpg",
                "heroImgRawHeight": 324,
                "heroImgRawWidth": 550,
                "squareImgUrl": "",
                "squareImgRawLength": 0,
                "locationId": 6929570,
                "name": "By the Mekong",
                "averageRating": 4.5,
                "userReviewCount": 528,
                "currentOpenStatusCategory": "CLOSING",
                "currentOpenStatusText": "Closes in 7 min",
                "establishmentTypeAndCuisineTags": [
                    "Chinese",
                    "Asian"
                ],
                "priceTag": "$$$$",
                "offers": {
                    "slot1Offer": null,
                    "slot2Offer": null
                },
                "hasMenu": true,
                "menuUrl": "https://online.fliphtml5.com/lkvwf/bruc/",
                "isDifferentGeo": false,
                "parentGeoName": "Mumbai",
                "distanceTo": "",
                "reviewSnippets": {
                    "reviewSnippetsList": [
                        {
                            "reviewText": "&#x201c;Ordered the wok chicken and some <b>dim sum</b> Both were amazing!&#x201d;",
                            "reviewUrl": "/ShowUserReviews-g304554-d6929570-r853490347-By_the_Mekong-Mumbai_Maharashtra.html"
                        },
                        {
                            "reviewText": "&#x201c;The Crispy lotus root , <b>Prawns</b> and mushrooms served during the cocktail hours...&#x201d;",
                            "reviewUrl": "/ShowUserReviews-g304554-d6929570-r848997965-By_the_Mekong-Mumbai_Maharashtra.html"
                        }
                    ]
                },
                "awardInfo": null,
                "isLocalChefItem": false,
                "isPremium": false,
                "isStoryboardPublished": true
            },
            {
                "heroImgUrl": "https://media-cdn.tripadvisor.com/media/photo-s/0a/19/28/5d/bar-counter.jpg",
                "heroImgRawHeight": 366,
                "heroImgRawWidth": 550,
                "squareImgUrl": "",
                "squareImgRawLength": 0,
                "locationId": 5998754,
                "name": "Ark Bar",
                "averageRating": 5,
                "userReviewCount": 515,
                "currentOpenStatusCategory": "",
                "currentOpenStatusText": "",
                "establishmentTypeAndCuisineTags": [
                    "Bar",
                    "Pub"
                ],
                "priceTag": "$$$$",
                "offers": {
                    "slot1Offer": null,
                    "slot2Offer": null
                },
                "hasMenu": false,
                "menuUrl": null,
                "isDifferentGeo": false,
                "parentGeoName": "Mumbai",
                "distanceTo": "",
                "reviewSnippets": {
                    "reviewSnippetsList": [
                        {
                            "reviewText": "&#x201c;Nice Music, Nice Ambience&#x201d;",
                            "reviewUrl": "/ShowUserReviews-g304554-d5998754-r861065556-Ark_Bar-Mumbai_Maharashtra.html"
                        },
                        {
                            "reviewText": "&#x201c;Food drinks&#x201d;",
                            "reviewUrl": "/ShowUserReviews-g304554-d5998754-r859102594-Ark_Bar-Mumbai_Maharashtra.html"
                        }
                    ]
                },
                "awardInfo": null,
                "isLocalChefItem": false,
                "isPremium": false,
                "isStoryboardPublished": false
            },
            {
                "heroImgUrl": "https://media-cdn.tripadvisor.com/media/photo-s/18/2d/d5/bb/getlstd-property-photo.jpg",
                "heroImgRawHeight": 367,
                "heroImgRawWidth": 550,
                "squareImgUrl": "",
                "squareImgRawLength": 0,
                "locationId": 17728654,
                "name": "Citrus Cafe",
                "averageRating": 5,
                "userReviewCount": 110,
                "currentOpenStatusCategory": "CLOSING",
                "currentOpenStatusText": "Closes in 6 min",
                "establishmentTypeAndCuisineTags": [
                    "Italian",
                    "Indian"
                ],
                "priceTag": "$$ - $$$",
                "offers": {
                    "slot1Offer": null,
                    "slot2Offer": null
                },
                "hasMenu": true,
                "menuUrl": "https://www.zomato.com/mumbai/citrus-cafe-near-andheri-east-station/menu",
                "isDifferentGeo": false,
                "parentGeoName": "Mumbai",
                "distanceTo": "",
                "reviewSnippets": {
                    "reviewSnippetsList": [
                        {
                            "reviewText": "&#x201c;... was good more of South <b>Indian</b> food.&#x201d;",
                            "reviewUrl": "/ShowUserReviews-g304554-d17728654-r781714547-Citrus_Cafe-Mumbai_Maharashtra.html"
                        },
                        {
                            "reviewText": "&#x201c;We ordered <b>nan</b> and juice .Service is ex...&#x201d;",
                            "reviewUrl": "/ShowUserReviews-g304554-d17728654-r839745975-Citrus_Cafe-Mumbai_Maharashtra.html"
                        }
                    ]
                },
                "awardInfo": null,
                "isLocalChefItem": false,
                "isPremium": false,
                "isStoryboardPublished": false
            },
            {
                "heroImgUrl": "https://media-cdn.tripadvisor.com/media/photo-s/23/8a/44/f7/royal-and-traditional.jpg",
                "heroImgRawHeight": 367,
                "heroImgRawWidth": 550,
                "squareImgUrl": "",
                "squareImgRawLength": 0,
                "locationId": 3268182,
                "name": "Nawab Saheb",
                "averageRating": 5,
                "userReviewCount": 961,
                "currentOpenStatusCategory": "CLOSED",
                "currentOpenStatusText": "Closed Now",
                "establishmentTypeAndCuisineTags": [
                    "Indian"
                ],
                "priceTag": "$$$$",
                "offers": {
                    "slot1Offer": null,
                    "slot2Offer": null
                },
                "hasMenu": true,
                "menuUrl": "https://drive.google.com/drive/folders/1BY4WtV-M5zmaIiZ_I5MXHf0nnDd4IWrH?usp=sharing",
                "isDifferentGeo": false,
                "parentGeoName": "Mumbai",
                "distanceTo": "",
                "reviewSnippets": {
                    "reviewSnippetsList": [
                        {
                            "reviewText": "&#x201c;Fantastic&#x201d;",
                            "reviewUrl": "/ShowUserReviews-g304554-d3268182-r860124141-Nawab_Saheb-Mumbai_Maharashtra.html"
                        },
                        {
                            "reviewText": "&#x201c;Amazing food!!&#x201d;",
                            "reviewUrl": "/ShowUserReviews-g304554-d3268182-r859608147-Nawab_Saheb-Mumbai_Maharashtra.html"
                        }
                    ]
                },
                "awardInfo": null,
                "isLocalChefItem": false,
                "isPremium": false,
                "isStoryboardPublished": false
            },
            {
                "heroImgUrl": "https://media-cdn.tripadvisor.com/media/photo-s/1a/8f/5d/c0/inspired-by-the-opulence.jpg",
                "heroImgRawHeight": 359,
                "heroImgRawWidth": 550,
                "squareImgUrl": "",
                "squareImgRawLength": 0,
                "locationId": 7273778,
                "name": "The Sahib Room & Kipling Bar",
                "averageRating": 4.5,
                "userReviewCount": 336,
                "currentOpenStatusCategory": "CLOSED",
                "currentOpenStatusText": "Closed Now",
                "establishmentTypeAndCuisineTags": [
                    "Indian"
                ],
                "priceTag": "$$$$",
                "offers": {
                    "slot1Offer": null,
                    "slot2Offer": null
                },
                "hasMenu": false,
                "menuUrl": null,
                "isDifferentGeo": false,
                "parentGeoName": "Mumbai",
                "distanceTo": "",
                "reviewSnippets": {
                    "reviewSnippetsList": [
                        {
                            "reviewText": "&#x201c;Overall a fantastic meal and great experience of authentic <b>Indian</b> mughlai food.&#x201d;",
                            "reviewUrl": "/ShowUserReviews-g304554-d7273778-r858328354-The_Sahib_Room_Kipling_Bar-Mumbai_Maharashtra.html"
                        },
                        {
                            "reviewText": "&#x201c;Everything is exceptional from the kebabs to <b>curries</b>.&#x201d;",
                            "reviewUrl": "/ShowUserReviews-g304554-d7273778-r855074678-The_Sahib_Room_Kipling_Bar-Mumbai_Maharashtra.html"
                        }
                    ]
                },
                "awardInfo": null,
                "isLocalChefItem": false,
                "isPremium": false,
                "isStoryboardPublished": true
            },
            {
                "heroImgUrl": "https://media-cdn.tripadvisor.com/media/photo-p/0a/19/1d/7f/momo-cafe.jpg",
                "heroImgRawHeight": 823,
                "heroImgRawWidth": 550,
                "squareImgUrl": "",
                "squareImgRawLength": 0,
                "locationId": 11686244,
                "name": "MoMo Cafe",
                "averageRating": 4.5,
                "userReviewCount": 545,
                "currentOpenStatusCategory": "CLOSED",
                "currentOpenStatusText": "Closed Now",
                "establishmentTypeAndCuisineTags": [
                    "Indian",
                    "Cafe"
                ],
                "priceTag": "$$$$",
                "offers": {
                    "slot1Offer": null,
                    "slot2Offer": null
                },
                "hasMenu": true,
                "menuUrl": "https://bit.ly/2zVGbG0",
                "isDifferentGeo": false,
                "parentGeoName": "Mumbai",
                "distanceTo": "",
                "reviewSnippets": {
                    "reviewSnippetsList": [
                        {
                            "reviewText": "&#x201c;On the last day, they sent a <b>pastry</b> over to our table as well as a nice littl...&#x201d;",
                            "reviewUrl": "/ShowUserReviews-g304554-d11686244-r850671198-MoMo_Cafe-Mumbai_Maharashtra.html"
                        },
                        {
                            "reviewText": "&#x201c;Everything right from the cream of mushroom soup , and the greek <b>salad</b> ( whic...&#x201d;",
                            "reviewUrl": "/ShowUserReviews-g304554-d11686244-r844574727-MoMo_Cafe-Mumbai_Maharashtra.html"
                        }
                    ]
                },
                "awardInfo": null,
                "isLocalChefItem": false,
                "isPremium": false,
                "isStoryboardPublished": false
            },
            {
                "heroImgUrl": "https://media-cdn.tripadvisor.com/media/photo-s/05/bd/f3/7c/it-s-mirchi.jpg",
                "heroImgRawHeight": 365,
                "heroImgRawWidth": 550,
                "squareImgUrl": "",
                "squareImgRawLength": 0,
                "locationId": 1202559,
                "name": "It's Mirchi",
                "averageRating": 4.5,
                "userReviewCount": 188,
                "currentOpenStatusCategory": "CLOSING",
                "currentOpenStatusText": "Closes in 7 min",
                "establishmentTypeAndCuisineTags": [
                    "Indian",
                    "International"
                ],
                "priceTag": "$$ - $$$",
                "offers": {
                    "slot1Offer": null,
                    "slot2Offer": null
                },
                "hasMenu": false,
                "menuUrl": null,
                "isDifferentGeo": false,
                "parentGeoName": "Mumbai",
                "distanceTo": "",
                "reviewSnippets": {
                    "reviewSnippetsList": [
                        {
                            "reviewText": "&#x201c;... tasty with very soft paneer Penne <b>pasta</b> white sauce was delicious and che...&#x201d;",
                            "reviewUrl": "/ShowUserReviews-g304554-d1202559-r854603827-It_s_Mirchi-Mumbai_Maharashtra.html"
                        },
                        {
                            "reviewText": "&#x201c;... Authentic boneless chicken thick <b>curry</b> prepared with tomato and cashew pa...&#x201d;",
                            "reviewUrl": "/ShowUserReviews-g304554-d1202559-r851344965-It_s_Mirchi-Mumbai_Maharashtra.html"
                        }
                    ]
                },
                "awardInfo": null,
                "isLocalChefItem": false,
                "isPremium": false,
                "isStoryboardPublished": false
            },
            {
                "heroImgUrl": "https://media-cdn.tripadvisor.com/media/photo-s/02/b5/66/6b/dakshin-itc-grand-maratha.jpg",
                "heroImgRawHeight": 448,
                "heroImgRawWidth": 550,
                "squareImgUrl": "",
                "squareImgRawLength": 0,
                "locationId": 1370074,
                "name": "Dakshin Coastal",
                "averageRating": 4.5,
                "userReviewCount": 263,
                "currentOpenStatusCategory": "CLOSED",
                "currentOpenStatusText": "Closed Now",
                "establishmentTypeAndCuisineTags": [
                    "Indian"
                ],
                "priceTag": "$$$$",
                "offers": {
                    "slot1Offer": null,
                    "slot2Offer": null
                },
                "hasMenu": false,
                "menuUrl": null,
                "isDifferentGeo": false,
                "parentGeoName": "Mumbai",
                "distanceTo": "",
                "reviewSnippets": {
                    "reviewSnippetsList": [
                        {
                            "reviewText": "&#x201c;Excellent Time Spend At ITC Maratha&#x201d;",
                            "reviewUrl": "/ShowUserReviews-g304554-d1370074-r861699742-Dakshin_Coastal-Mumbai_Maharashtra.html"
                        },
                        {
                            "reviewText": "&#x201c;Avartana experience&#x201d;",
                            "reviewUrl": "/ShowUserReviews-g304554-d1370074-r860600488-Dakshin_Coastal-Mumbai_Maharashtra.html"
                        }
                    ]
                },
                "awardInfo": null,
                "isLocalChefItem": false,
                "isPremium": false,
                "isStoryboardPublished": false
            },
            {
                "heroImgUrl": "https://media-cdn.tripadvisor.com/media/photo-s/19/eb/93/c3/hornby-s-pavilion.jpg",
                "heroImgRawHeight": 413,
                "heroImgRawWidth": 550,
                "squareImgUrl": "",
                "squareImgRawLength": 0,
                "locationId": 786941,
                "name": "Hornby's Pavilion",
                "averageRating": 4.5,
                "userReviewCount": 672,
                "currentOpenStatusCategory": "CLOSING",
                "currentOpenStatusText": "Closes in 6 min",
                "establishmentTypeAndCuisineTags": [
                    "Indian",
                    "Asian"
                ],
                "priceTag": "$$$$",
                "offers": {
                    "slot1Offer": null,
                    "slot2Offer": null
                },
                "hasMenu": false,
                "menuUrl": null,
                "isDifferentGeo": false,
                "parentGeoName": "Mumbai",
                "distanceTo": "",
                "reviewSnippets": {
                    "reviewSnippetsList": [
                        {
                            "reviewText": "&#x201c;Always the Best&#x201d;",
                            "reviewUrl": "/ShowUserReviews-g304554-d786941-r861712722-Hornby_s_Pavilion-Mumbai_Maharashtra.html"
                        },
                        {
                            "reviewText": "&#x201c;Par Excellence!!&#x201d;",
                            "reviewUrl": "/ShowUserReviews-g304554-d786941-r861636487-Hornby_s_Pavilion-Mumbai_Maharashtra.html"
                        }
                    ]
                },
                "awardInfo": null,
                "isLocalChefItem": false,
                "isPremium": false,
                "isStoryboardPublished": false
            },
            {
                "heroImgUrl": "https://media-cdn.tripadvisor.com/media/photo-s/14/3a/6c/44/lake-view-cafe.jpg",
                "heroImgRawHeight": 367,
                "heroImgRawWidth": 550,
                "squareImgUrl": "",
                "squareImgRawLength": 0,
                "locationId": 1957837,
                "name": "Lake View Cafe",
                "averageRating": 4.5,
                "userReviewCount": 1367,
                "currentOpenStatusCategory": "CLOSED",
                "currentOpenStatusText": "Closed Now",
                "establishmentTypeAndCuisineTags": [
                    "Indian",
                    "Cafe"
                ],
                "priceTag": "$$$$",
                "offers": {
                    "slot1Offer": null,
                    "slot2Offer": null
                },
                "hasMenu": true,
                "menuUrl": "https://drive.google.com/drive/folders/1ZgVXcO3stHXHNXyOgE4xesdHsPF7z2Zk?usp=sharing",
                "isDifferentGeo": false,
                "parentGeoName": "Mumbai",
                "distanceTo": "",
                "reviewSnippets": {
                    "reviewSnippetsList": [
                        {
                            "reviewText": "&#x201c;... olives, channa <b>chaat</b>, jalebis and p...&#x201d;",
                            "reviewUrl": "/ShowUserReviews-g304554-d1957837-r843897450-Lake_View_Cafe-Mumbai_Maharashtra.html"
                        },
                        {
                            "reviewText": "&#x201c;I specially like the chat <b>salad</b> and des...&#x201d;",
                            "reviewUrl": "/ShowUserReviews-g304554-d1957837-r733148236-Lake_View_Cafe-Mumbai_Maharashtra.html"
                        }
                    ]
                },
                "awardInfo": null,
                "isLocalChefItem": false,
                "isPremium": false,
                "isStoryboardPublished": false
            },
            {
                "heroImgUrl": "https://media-cdn.tripadvisor.com/media/photo-s/05/ad/f2/0b/mostly-grills.jpg",
                "heroImgRawHeight": 365,
                "heroImgRawWidth": 550,
                "squareImgUrl": "",
                "squareImgRawLength": 0,
                "locationId": 1139190,
                "name": "Mostly Grills",
                "averageRating": 5,
                "userReviewCount": 650,
                "currentOpenStatusCategory": "CLOSED",
                "currentOpenStatusText": "Closed Now",
                "establishmentTypeAndCuisineTags": [
                    "Indian",
                    "Bar"
                ],
                "priceTag": "$$$$",
                "offers": {
                    "slot1Offer": null,
                    "slot2Offer": null
                },
                "hasMenu": false,
                "menuUrl": null,
                "isDifferentGeo": false,
                "parentGeoName": "Mumbai",
                "distanceTo": "",
                "reviewSnippets": {
                    "reviewSnippetsList": [
                        {
                            "reviewText": "&#x201c;... pepper and onions with tandoori <b>twist</b>.&#x201d;",
                            "reviewUrl": "/ShowUserReviews-g304554-d1139190-r818659429-Mostly_Grills-Mumbai_Maharashtra.html"
                        },
                        {
                            "reviewText": "&#x201c;... Cheddar Cigar <b>Roll</b> 5⭐ These were ba...&#x201d;",
                            "reviewUrl": "/ShowUserReviews-g304554-d1139190-r749419051-Mostly_Grills-Mumbai_Maharashtra.html"
                        }
                    ]
                },
                "awardInfo": null,
                "isLocalChefItem": false,
                "isPremium": false,
                "isStoryboardPublished": false
            },
            {
                "heroImgUrl": "https://media-cdn.tripadvisor.com/media/photo-s/0c/f3/d8/b4/shamiana.jpg",
                "heroImgRawHeight": 350,
                "heroImgRawWidth": 550,
                "squareImgUrl": "",
                "squareImgRawLength": 0,
                "locationId": 1139260,
                "name": "Shamiana",
                "averageRating": 4.5,
                "userReviewCount": 572,
                "currentOpenStatusCategory": "CLOSING",
                "currentOpenStatusText": "Closes in 6 min",
                "establishmentTypeAndCuisineTags": [
                    "American",
                    "Indian"
                ],
                "priceTag": "$$$$",
                "offers": {
                    "slot1Offer": null,
                    "slot2Offer": null
                },
                "hasMenu": true,
                "menuUrl": "http://taj.tajhotels.com/en-in/taj-mahal-palace-mumbai/restaurants/shamiana-restaurant/#mr-menu-carousel",
                "isDifferentGeo": false,
                "parentGeoName": "Mumbai",
                "distanceTo": "",
                "reviewSnippets": {
                    "reviewSnippetsList": [
                        {
                            "reviewText": "&#x201c;Excellent food n service&#x201d;",
                            "reviewUrl": "/ShowUserReviews-g304554-d1139260-r860493789-Shamiana-Mumbai_Maharashtra.html"
                        },
                        {
                            "reviewText": "&#x201c;Lunch&#x201d;",
                            "reviewUrl": "/ShowUserReviews-g304554-d1139260-r860389908-Shamiana-Mumbai_Maharashtra.html"
                        }
                    ]
                },
                "awardInfo": null,
                "isLocalChefItem": false,
                "isPremium": false,
                "isStoryboardPublished": false
            }
        ]
    }
}
let obj1 =
{
    "heroImgUrl": "https://media-cdn.tripadvisor.com/media/photo-s/0d/13/75/e0/live-teppanyaki-counter.jpg",
    "heroImgRawHeight": 366,
    "heroImgRawWidth": 550,
    "squareImgUrl": "",
    "squareImgRawLength": 0,
    "locationId": 10338075,
    "name": "EAST-EAST ASIAN SPICE TRAIL",
    "averageRating": 5,
    "userReviewCount": 510,
    "currentOpenStatusCategory": "CLOSING",
    "currentOpenStatusText": "Closes in 7 min",
    "establishmentTypeAndCuisineTags": [
        "Chinese",
        "Japanese"
    ],
    "priceTag": "$$$$",
    "offers": {
        "slot1Offer": null,
        "slot2Offer": null
    },
    "hasMenu": false,
    "menuUrl": null,
    "isDifferentGeo": false,
    "parentGeoName": "Mumbai",
    "distanceTo": "",
    "reviewSnippets": {
        "reviewSnippetsList": [
            {
                "reviewText": "&#x201c;Best East <b>Asian food</b> in the city&#x201d;",
                "reviewUrl": "/ShowUserReviews-g304554-d10338075-r822095417-EAST_EAST_ASIAN_SPICE_TRAIL-Mumbai_Maharashtra.html"
            },
            {
                "reviewText": "&#x201c;... dimsums and <b>Tofu</b> tossed in exotic v...&#x201d;",
                "reviewUrl": "/ShowUserReviews-g304554-d10338075-r838730926-EAST_EAST_ASIAN_SPICE_TRAIL-Mumbai_Maharashtra.html"
            }
        ]
    },
    "awardInfo": null,
    "isLocalChefItem": false,
    "isPremium": false,
    "isStoryboardPublished": false
}
const RestaurantPage = ({ resturants, resturantLoading }) => {
    // console.log(resturants)
    // if (!resturants.data || resturantLoading) {
    //     return <Loader />
    // }
    return (
        <div className='grid-resturants'>
            {obj.data.data?.map((resturant) => (
                <RestaurantCard resturant={resturant} />
            ))}
        </div>
    )
}

export default RestaurantPage

