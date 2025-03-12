class Solution {
public:
    ListNode* removeElements(ListNode* head, int val) {
        ListNode* dummy = new ListNode(0); // Create a dummy node
        dummy->next = head;  // Dummy node points to the head
        ListNode* r = head;
        ListNode* l = dummy; // Use dummy as the previous node

        while (r != NULL) {
            if (r->val == val) {
                l->next = r->next; // Skip the node to be deleted
                delete r; // Free memory
                r = l->next; // Move to the next node
            } else {
                l = r; // Move previous pointer
                r = r->next; // Move forward
            }
        }

        head = dummy->next; // Update head
        delete dummy; // Delete dummy node
        return head;
    }
};
