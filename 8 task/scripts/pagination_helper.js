/*
For this exercise you will be strengthening your page-fu mastery. You will complete the 
PaginationHelper class, which is a utility class helpful for querying paging information 
related to an array.
The class is designed to take in an array of values and an integer indicating how many 
items will be allowed per each page. The types of values contained within the collection/
array are not relevant.
*/

class PaginationHelper {
    constructor(array = [], count = 0) {
        if (!Array.isArray(array)) {
            throw new Error('The first argumet must be an array and second must be item counter per page');
        }

        if (array.length === 0 || count <= 0 || Array.isArray(count) || isNaN(Number(count))) {
            throw new Error('The first argumet must be an array and second must be item counter per page');
        }
        this.items = array;
        this.countPerPage = count;
    }
    pageCount() {
        return Math.ceil(this.itemCount() / this.countPerPage);
    }
    itemCount() {
        return this.items.length;
    }

    //return quantity of the elements on the page with the specified index
    pageItemCount(pageIndex) {
        let lastPageIndex = this.pageCount() - 1;
        let nPageIndex = Number(pageIndex);
        if (pageIndex < 0 ||
            pageIndex > lastPageIndex ||
            isNaN(nPageIndex) ||
            Array.isArray(pageIndex)) {
            return -1;
        }

        return nPageIndex < lastPageIndex ? this.countPerPage : this.itemCount() % this.countPerPage;
    }

    //return page index of the element with specified index
    pageIndex(itemIndex = -1) {
        let nItemIndex = Number(itemIndex);

        if (nItemIndex < 0 ||
            nItemIndex >= this.itemCount() ||
            isNaN(nItemIndex) ||
            Array.isArray(itemIndex)) {
            return -1;
        }
        return Math.floor(itemIndex / this.countPerPage);
    }
}





var helper = new PaginationHelper(['a', 'b', 'c', 'd', 'e', 'f'], 4);

console.log(helper.pageCount() === 2, 2); //should == 2

console.log(helper.itemCount() === 6, 6); //should == 6

console.log(helper.pageItemCount(0) === 4, 4); //should == 4

console.log(helper.pageItemCount(1) === 2, 2); // last page - should == 2

console.log(helper.pageItemCount(2) === -1, -1); // should == -1 since the page is invalid



// pageIndex takes an item index and returns the page that it belongs on

console.log(helper.pageIndex(5) === 1, 1); //should == 1 (zero based index)

console.log(helper.pageIndex(2) === 0, 0); //should == 0

console.log(helper.pageIndex(20) === -1, -1); //should == -1

console.log(helper.pageIndex(-10) === -1, -1); //should == -1