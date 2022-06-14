
import Challenges from "../../desafios";

const error = 'A função falhou'

let test = [ [ 8, 12 ], [ 10, 15 ] ]

describe("unit tests", () => {
  it("Test mirror function", () => {
    expect(Challenges.reversedNum(123)).to.be.eq(321);
    expect(Challenges.reversedNum(100)).to.be.eq(1);
    expect(Challenges.reversedNum(2344)).to.be.eq(4432);
  });
  
  it("Second highest number", () => {
    expect(Number(Challenges.penultimate([1, 2, 3, 4]))).to.be.eq(3);
    expect(Number(Challenges.penultimate([1, 2, 3, 4, 5, 5]))).to.be.eq(4);
    expect(Number(Challenges.penultimate([1, 1]))).to.be.eq(error);
    expect(Number(Challenges.penultimate([1, 2]))).to.be.eq(2);
    expect(Number(Challenges.penultimate([2]))).to.be.eq(error);
});
  it("Matrix multiplication", () => {
    expect( Challenges.multiplyMatrices([[4], [5]], [[2, 3]]).toString()).to.be.equal(test.toString());
});
})
