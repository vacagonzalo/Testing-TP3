Feature: List CRUD

    The CRUD feature stand for Create, Read, Update and delete.
    The List class only acept elements in with the key is unique and is a string.

    Rule: Only a unique element with a string key can be created

        Scenario: Create the first valid element
            Given an empy list
            When the following element is added
                | key   | value |
                | first | 1     |
            Then there is 1 element in the list

        Scenario: Create the nth valid element
            Given a list with the following elements
                | key | value |
                | a   | 1     |
                | b   | 2     |
                | c   | 3     |
            When the following element is added
                | key    | value |
                | fourth | 1     |
            Then there are 4 elements in the list

        Scenario: Create the first invalid element
            Given an empy list
            When the following invalid element is added
                | key   | value |
                | 1     | 1     |
            Then there are 0 elements in the list

        Scenario: Create the nth invalid element
            Given a list with the following elements
                | key | value |
                | a   | 1     |
                | b   | 2     |
                | c   | 3     |
            When the following invalid element is added
                | key   | value |
                | 1     | 1     |
            Then there are 3 elements in the list

        Scenario: Create an existing element
            Given a list with the following elements
                | key | value |
                | a   | 1     |
                | b   | 2     |
                | c   | 3     |
            When the following element is added
                | key | value |
                | c   | 3     |
            Then there are 3 elements in the list

    Rule: Only an existing valid key will report a value

        Scenario: Read an existing element
            Given a list with the following elements
                | key | value |
                | a   | 1     |
                | b   | 2     |
                | c   | 3     |
            When the key <key> is consulted
            Then the value <value> is readed
            Examples:
                | key | value |
                | a   | 1     |
                | b   | 2     |
                | c   | 3     |

        Scenario: Read a non-existent element
            Given a list with the following elements
                | key | value |
                | a   | 1     |
                | b   | 2     |
                | c   | 3     |
            When the key <key> is consulted
            Then the value <value> is readed
            Examples:
                | key | value |
                | z   | null  |
                | 1   | null  |
    
    Rule: Only an existing valid key can be updated

        Scenario: Update the value of an existing key
            Given a list with the following elements
                | key | value |
                | a   | 1     |
                | b   | 2     |
                | c   | 3     |
            When the value in key <key> is updated to <value>
            Then the value <value> is readed
            Examples:
                | key | value |
                | a   | 11    |
                | b   | 22    |
                | c   | 33    |

        Scenario: Update the value of a non-existing or invalid key
            Given a list with the following elements
                | key | value |
                | a   | 1     |
                | b   | 2     |
                | c   | 3     |
            When the value in key <key> is updated to <value>
            Then the value <value> is readed
            Examples:
                | key | value |
                | z   | null  |
                | 1   | null  |

    Rule: Only an existing valid key can be deleted

        Scenario: Delete an existing valid element
            Given a list with the following elements
                | key | value |
                | a   | 1     |
                | b   | 2     |
                | c   | 3     |
            When the element with key <key> is deleted
            Then there are 2 elements in the list
            Examples:
                | key | value |
                | b   | 2     |