
const arrCategories = [...document.querySelectorAll(".item")];
console.log(`Number of categories: ${arrCategories.length}`);

const showCategories = () => {
    return function (element, i) { 
        console.log(`Category: ${arrCategories[i].firstElementChild.textContent}`);
        console.log(`Elements: ${arrCategories[i].lastElementChild.children.length}`);
    }
}

arrCategories.forEach(showCategories());






 



