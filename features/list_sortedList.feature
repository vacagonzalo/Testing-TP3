Feature: Sorted list of keys

    The class List is able to generate an array of its keys in ascending order

    Rule: On command, the class must be able to generate a sorted list of keys

        Scenario: Getting a sorted list of keys
            Given a list with the following elements
                | key | value |
                | c   | 3     |
                | a   | 1     |
                | b   | 2     |
            Then a sorted list is generated
                | key |
                | a   |
                | b   |
                | c   |