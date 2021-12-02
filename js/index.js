const progressBoxs = document.querySelectorAll(".progress-box");
const nextBtn = document.querySelector("#next");
const prevBtn = document.querySelector("#prev");
let currentIndex = 0;
nextBtn.addEventListener('click', () => {
    next(currentIndex)
    if(currentIndex>progressBoxs.length-2){
        currentIndex = progressBoxs.length-2
    }
    currentIndex++
});
prevBtn.addEventListener('click', () => {
    prev(currentIndex)
    currentIndex--
});
function prev(currentIndex) {
    try{
        progressBoxs[currentIndex - 1].lastElementChild.classList.remove("w-100", "w-50")
    }catch(err){
        console.log("Xatolik");
    }
}
function next(currentIndex) {
    try {
        if (currentIndex == (progressBoxs.length / 2) - 1) {
            progressBoxs[currentIndex].lastElementChild.classList.add("w-50")
        } else if (!(currentIndex == progressBoxs.length - 1)) {
            progressBoxs[currentIndex].lastElementChild.classList.add("w-100")
        }else if (currentIndex > progressBoxs.length-2){
            currentIndex = progressBoxs.length-2
        }
    } catch (err) {
        console.log("Xatolik")
    }
}
progressBoxs.forEach((progressBox, index) => {
    progressBox.firstElementChild.addEventListener("click", () => {
        progressBoxs.forEach(item=>{
            item.classList.remove("active")
        })
        progressBox.classList.add("active")
        let num = 0
        if (index === 0) {
            num = 0
            go(index, num)
        } else if (index == (progressBoxs.length / 2)) {
            num = 1
            go(index, num, 50)
        } else if (index > 0) {
            num = 1
            go(index, num)
        }
    })
    progressBox.firstElementChild.addEventListener("dblclick", () => {
        back(progressBox)
    })
})
function go(index, num = 1, size = 100) {
    currentIndex++;
    progressBoxs[index - num].lastElementChild.classList.remove("w-0")
    progressBoxs[index - num].lastElementChild.classList.add(`w-${size}`)
}
function back(elem) {
    elem.firstElementChild.nextElementSibling.classList.remove("w-100", "w-50")
    elem.firstElementChild.nextElementSibling.classList.add("w-0")
}