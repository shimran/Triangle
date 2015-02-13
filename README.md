TRIANGULATOR

TRIANGLE APP by Shimran George

Objectives:

This simple app takes in three sides as a string, and returns whether or not it constitutes a triangle. This is achieved using the principle of the Triangle Inequality. If it passes the Triangle Inequality test, it will then proceed to determine what kind of triangle it is using conditional branching.

Via conditional branching, it will:

1)Check to see if has two sides equal to each other.
2)->Then check to see if all sides are equal to each other.
3)--> If all sides equal, go back to two and print out Equilateral Triangle.
4) If only two sides are equal, go back to one and print out Isosceles Triangle.
5) If it meets neither condition (1) or condition (2), the program determines it to be a scalene triangle. 

Future Functionality:

Multiple considerations for future functionality based on the properties of Euclidean spaced triangles. The most immediate functionality could be the determination of right triangle properties passed through a boolean function isRight? to test is sides are equal using the Pythagorean Theorem.


Written in:

Javascript using JQuery vs. 1.11.2

Specs were tested using Mocha.js and Chai.js

Contact:

Shimran
shimranbgeorge@gmail.com
