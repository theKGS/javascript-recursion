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

console.log(merge([5], [1, 2, 3]));