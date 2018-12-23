var baseMultiLevelMenuData = [
    {content:'CV by format', menus: [
        {content:'VCard', url:'https://commandr.stream/vcard/'},
        {content:'Web-SVG', menus: [
            {content:'CV in English', url:'https://commandr.stream/cv.en/'},
            {content:'CV in Russian', url:'https://commandr.stream/cv.ru/'},
        ]},
        {content:'Web-HTML', menus: [
            {content:'CV in English', url:'https://commandr.stream/cv.en.html'},
            {content:'CV in Russian', url:'https://commandr.stream/cv.ru.html'},
        ]},
        {content:'PDF', menus: [
            {content:'CV in English', url:'https://commandr.stream/cv.en.pdf'},
            {content:'CV in Russian', url:'https://commandr.stream/cv.ru.pdf'},
        ]},
    ]},
    {content:'CV in English', menus: [
        {content:'Web-SVG', url:'https://commandr.stream/cv.en/'},
        {content:'Web-HTML', url:'https://commandr.stream/cv.en.html'},
        {content:'PDF', url:'https://commandr.stream/cv.en.pdf'},
    ]},
    {content:'CV in Russian', menus: [
        {content:'Web-SVG', url:'https://commandr.stream/cv.ru/'},
        {content:'Web-HTML', url:'https://commandr.stream/cv.ru.html'},
        {content:'PDF', url:'https://commandr.stream/cv.ru.pdf'},
    ]},
    {content:'Contacts', menus: [
        {content:'VCard', url:'https://commandr.stream/vcard/'},
        {content:'E-mail', url:'mailto:andrew@commandr.stream?subject=From%20Resume-CV'},
        {content:'Mobile #', url:'callto:+996709773399'},
        {content:'Telegram', url:'https://telegram.me/andrcmdr'},
        {content:'Technologic Channel', url:'https://telegram.me/technologique'},
        {content:'Hangouts', url:'http://web.commandr.stream/call'},
        {content:'Skype', url:'skype:andy.bednoff?userinfo'},
        {content:'LinkedIn', url:'https://linkedin.com/in/andrcmdr'},
        {content:'GitHub', url:'https://github.com/andrcmdr'},
        {content:'Twitter', url:'https://twitter.com/andrcmdr'},
    ]}
];

var selectMenuGroupData = [{
    title : 'Candy Bar',
    list : [
        { id:1, name: 'Mars', manufacturer: 'Mars' },
        { id:2, name: 'Snickers', manufacturer: 'Mars' },
        { id:3, name: 'Twix', manufacturer: 'Mars' },
        { id:4, name: 'Kit Kat', manufacturer: 'Nestlé' },
        { id:5, name: 'Bounty', manufacturer: 'Mars' },
        { id:6, name: 'Milky Way', manufacturer: 'Mars' },
        { id:7, name: "M&M's", manufacturer: 'Mars' },
        { id:8, name: 'Nesquik', manufacturer: 'Nestlé' },
        { id:9, name: 'Nuts', manufacturer: 'Nestlé' },
        { id:10, name: 'Dove', manufacturer: 'Mars' },
        { id:11, name: 'Skittles', manufacturer: 'Mars' },
        { id:12, name: 'Lion', manufacturer: 'Nestlé' },
        { id:13, name: 'Milka', manufacturer: 'Kraft Foods' },
        { id:14, name: 'Toblerone', manufacturer: 'Kraft Foods' },
        { id:15, name: 'Picnic', manufacturer: 'Cadbury' },
        { id:16, name: 'Wispa', manufacturer: 'Cadbury' },
        { id:17, name: 'Ritter Sport', manufacturer: 'Ritter Sport' },
        { id:18, name: 'Kinder Surprise', manufacturer: 'Ferrero' },
        { id:19, name: 'Raffaello', manufacturer: 'Ferrero' },
        { id:20, name: 'Nutella', manufacturer: 'Ferrero' },
        { id:21, name: 'Ferrero Rocher', manufacturer: 'Ferrero' }
    ]
},{
    title : 'Candy Tile',
    list : [
        { id:1, name: 'Mars', manufacturer: 'Mars' },
        { id:2, name: 'Snickers', manufacturer: 'Mars' },
        { id:3, name: 'Twix', manufacturer: 'Mars' },
        { id:4, name: 'Kit Kat', manufacturer: 'Nestlé' },
        { id:5, name: 'Bounty', manufacturer: 'Mars' },
        { id:6, name: 'Milky Way', manufacturer: 'Mars' },
        { id:7, name: "M&M's", manufacturer: 'Mars' },
        { id:8, name: 'Nesquik', manufacturer: 'Nestlé' },
        { id:9, name: 'Nuts', manufacturer: 'Nestlé' },
        { id:10, name: 'Dove', manufacturer: 'Mars' },
        { id:11, name: 'Skittles', manufacturer: 'Mars' },
        { id:12, name: 'Lion', manufacturer: 'Nestlé' },
        { id:13, name: 'Milka', manufacturer: 'Kraft Foods' },
        { id:14, name: 'Toblerone', manufacturer: 'Kraft Foods' },
        { id:15, name: 'Picnic', manufacturer: 'Cadbury' },
        { id:16, name: 'Wispa', manufacturer: 'Cadbury' },
        { id:17, name: 'Ritter Sport', manufacturer: 'Ritter Sport' },
        { id:18, name: 'Kinder Surprise', manufacturer: 'Ferrero' },
        { id:19, name: 'Raffaello', manufacturer: 'Ferrero' },
        { id:20, name: 'Nutella', manufacturer: 'Ferrero' },
        { id:21, name: 'Ferrero Rocher', manufacturer: 'Ferrero' }
    ]
}];

$('#btnSelectMenu').click(function(){
    $(this).selectMenu({
        lang : 'en',
        regular : true,
        data : baseMultiLevelMenuData
    });
});

$('#btnMenu').click(function(){
    $(this).selectMenu({
        lang : 'en',
        showField : 'name',
        keyField : 'id',
        multiple : true,
        data : selectMenuGroupData
    });
});

$('#btnMultiMenu').click(function(){
    var $box = $('#panelCallback');
    $(this).selectMenu({
        lang : 'en',
        showField : 'name',
        keyField : 'id',
        multiple : true,
        data : selectMenuGroupData,
        eSelect : function(data){
            $box.empty();
            if(data && data.length){
                $.each(data, function(i, row){
                    $box.append('<p>Selected '+row.name+' ( '+row.manufacturer+' )</p>');
                });
            }
        },
        eTabSwitch: function(index, tab){
            $box.empty();
            $box.append('<p>You switch to the Tab with index <strong>'+index+'</strong>, Tab name is <strong>'+tab.title+'</strong></p>');
        }
    });
});

