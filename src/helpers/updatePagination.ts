
export const updatePagination = (currentPage: number, pages: number[]): number[] => {
    let pagesDisplay = new Array(10)

    if (pages.length < 10) {
        pagesDisplay = [...pages]
    }

    else if(currentPage <= 5){
        const sliced = pages.slice(0, pagesDisplay.length - 1)
        pagesDisplay = [...sliced, pages.length]
    }

    else  if(currentPage >= pages.length - 4){
        const sliced = pages.slice( pages.length - pagesDisplay.length ,pages.length)
        pagesDisplay = [...sliced]
    }
    else{
        const slicedLeft = pages.slice(currentPage - 5, currentPage - 1)
        const slicedRight = pages.slice(currentPage, currentPage + 4)
        pagesDisplay = [...slicedLeft, currentPage, ...slicedRight,  pages.length]
    }

    return pagesDisplay
}