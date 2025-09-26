var mergeTwoLists = function(list1, list2) {
    // Create a dummy node to handle the head of the merged list
    let dummy = new ListNode();
    let current = dummy;

    // Iterate through both lists until one of them is empty
    while (list1 !== null && list2 !== null) {
        if (list1.val <= list2.val) {
            current.next = list1;  // Point to the smaller node
            list1 = list1.next;    // Move list1 pointer forward
        } else {
            current.next = list2;  // Point to the smaller node
            list2 = list2.next;    // Move list2 pointer forward
        }
        current = current.next;  // Move the current pointer forward
    }

    // If there are remaining nodes in either list, append them
    if (list1 !== null) {
        current.next = list1;
    } else {
        current.next = list2;
    }

    // Return the merged list (skip the dummy node)
    return dummy.next;
};