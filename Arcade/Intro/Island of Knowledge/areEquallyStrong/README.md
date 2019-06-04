Call two arms *equally strong* if the heaviest weights they each are able to lift are equal.

Call two people *equally strong* if their strongest arms are equally strong (the strongest arm can be both the right and the left), and so are their weakest arms.

Given your and your friend's arms' lifting capabilities find out if you two are equally strong.

__Example__

* For `yourLeft = 10`, `yourRight = 15`, `friendsLeft = 15`, and `friendsRight = 10`, the output should be
`areEquallyStrong(yourLeft, yourRight, friendsLeft, friendsRight) = true`;
* For `yourLeft = 15`, `yourRight = 10`, `friendsLeft = 15`, and `friendsRight = 10`, the output should be
`areEquallyStrong(yourLeft, yourRight, friendsLeft, friendsRight) = true`;
* For `yourLeft = 15`, `yourRight = 10`, `friendsLeft = 15`, and `friendsRight = 9`, the output should be
`areEquallyStrong(yourLeft, yourRight, friendsLeft, friendsRight) = false`.
Input/Output

* __[execution time limit] 4 seconds (js)__

* __[input] integer yourLeft__

A non-negative integer representing the heaviest weight you can lift with your left arm.

* __[input] integer yourRight__

A non-negative integer representing the heaviest weight you can lift with your right arm.

* __[input] integer friendsLeft__

A non-negative integer representing the heaviest weight your friend can lift with his or her left arm.

* __[input] integer friendsRight__

A non-negative integer representing the heaviest weight your friend can lift with his or her right arm.

* __[output] integer boolean__

`true` if you and your friend are equally strong, `false` otherwise.