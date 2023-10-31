const favorite_fruits: string[] = ['Mangoe','apple', 'banana', 'strawberry'];

if (favorite_fruits.includes('apple')) {
    console.log('You really like apple!');
}

if (favorite_fruits.includes('banana')) {
    console.log('You really like banana!');
}

if (favorite_fruits.includes('strawberry')) {
    console.log('You really like strawberry!');
}

if (favorite_fruits.includes('orange')) {
    console.log('You really like orange!');
} else {
    console.log('Orange is not in your list of favorite fruits.');
}
