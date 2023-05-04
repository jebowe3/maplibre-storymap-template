var config = {
    style: 'map/style.json',
    showMarkers: false,
    markerColor: '#3FB1CE',
    inset: true, // if inset map is set to true, legend will be disabled.
    legend: false, // if legend is set to true, inset will be disabled.
    theme: 'dark',
    useCustomLayers: false, //set true for enabling custom layers from sources.js
    bookmarks: true,
    chapterReturn: true,
    title: 'MapLibre Storymap template',
    logo: '',
    subtitle: 'Demo of the template using self-hosted tiles',
    byline: '',
    mobileview: '<div id="rotate-mobile"><em>For optimal viewing of this storytelling map on mobile, rotate your device to a horizontal orientation.</em><br><br><img src="images/device.png">', // to add custom messaging in the header for mobile devices
    footer: 'Source: source citations, etc.<br> Created using <a href="https://github.com/digidem/maplibre-storymap" target="_blank">MapLibre Storytelling</a> template.',
    chapters: [
        {
            id: 'slug-style-id',
            alignment: 'left',
            hidden: false,
            title: 'Minneapolis, Minnesota',
            image: 'images/Minneapolis.jpg',
            caption: '',
            website: '',
            author: '',
            legend: '',
            description: 'This is an example of a Mississippi River story map. We start in Minneapolis with a pitch of 70 and a bearing of 0.',
            location: {
                center: [-93.269167,44.981944],
                zoom: 9,
                pitch: 70,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            spinGlobe: false,
            mapInteractive: true,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
                {
                    layer: 'countries-fill',
                    opacity: 1
                }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'other-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Dubuque, Iowa',
            image: 'images/Dubuque.jpg',
            description: 'Then we go to Dubuque with a pitch of 80 and a bearing of -270. We are looking east.',
            location: {
                center: [-90.69,42.5],
                zoom: 12,
                pitch: 80,
                bearing: -270
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            mapInteractive: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'countries-fill',
                    opacity: 0
                }
            ],
            onChapterExit: []
        },
        {
            id: 'new-id',
            alignment: 'left',
            hidden: false,
            title: 'Soulard, St. Louis, Missouri',
            image: 'images/Soulard.jpg',
            caption: '',
            website: '',
            author: '',
            legend: '',
            description: 'Then we travel to Soulard Neighborhood in St. Louis with a pitch of 85 and a bearing of 180. We are looking south.',
            location: {
                center: [-90.2086,38.6053],
                zoom: 15,
                pitch: 85,
                bearing: 180
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            spinGlobe: false,
            mapInteractive: true,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
                {
                    layer: 'countries-fill',
                    opacity: 1
                }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        }
    ]
};
