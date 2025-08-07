function merge(alist, blist) {
    if (alist.length == 0) {
        return blist;
    } else if (blist.length == 0) {
        return alist;
    }

    if (alist[0] <= blist) {
        const e = alist.shift();
        return [e].concat(merge(alist, blist));
    } else {
        const e = blist.shift();
        return [e].concat(merge(alist, blist));
    }
}

function mergesort(list){
    if (list.length == 0) {
        return [];
    } else if (list.length == 1) {
        return list;
    } else {
        let leftlist = list.slice(0, Math.floor(list.length / 2));
        let rightlist = list.slice(Math.floor(list.length / 2));
        return merge(mergesort (leftlist), mergesort(rightlist));
    }
}

console.log(mergesort([7, 3, 2, 4, 1]));