package white.zac.quickmaths;

/**
 * Created by zacsw on 1/1/2018.
 */

/**
 * Equation class holds the equation and possible answers - one correct and two incorrect
 */
public class Equation {
    String equation;
    int answer;
    int wrong1;
    int wrong2;

    public Equation(String e, int a) {
        this.equation = e;
        this.answer = a;
    }

    /**
     * default constructor
     */
    public Equation() {

    }

    /**
     * getter and setter methods
     * @return
     */
    public String getEquation() {
        return equation;
    }

    public void setEquation(String equation) {
        this.equation = equation;
    }

    public int getAnswer() {
        return answer;
    }

    public void setAnswer(int answer) {
        this.answer = answer;
    }


    public int getWrong1() {
        return wrong1;
    }

    public void setWrong1(int wrong1) {
        this.wrong1 = wrong1;
    }

    public int getWrong2() {
        return wrong2;
    }

    public void setWrong2(int wrong2) {
        this.wrong2 = wrong2;
    }
}
