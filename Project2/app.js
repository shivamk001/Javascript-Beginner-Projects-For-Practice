let data = [
    {
        name: 'Sean',
        age: '30'
    },
    {
        name: 'Clive',
        age: '32'
    },
    {
        name: 'Jordon',
        age: '30'
    },
    {
        name: 'Brain',
        age: '23'
    },
    {
        name: 'Sarah',
        age: '21'
    },
    {
        name: 'Sally',
        age: '25'
    },
    {
        name: 'Robert',
        age: '29'
    }
]

const info = document.querySelector('#info');

let details = data.map(function (item) {
    return '<div>' + item.name + ' is ' + item.age + ' years old.' + '</div>';
});

info.innerHTML = details.join('\n');