package white.zac.quickmaths;

import android.app.Activity;
import android.content.Context;
import android.graphics.Color;
import android.os.Bundle;
import android.os.CountDownTimer;
import android.support.annotation.Nullable;
import android.view.View;
import android.widget.RelativeLayout;
import android.widget.TextView;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.Random;

/**
 * Created by zacsw on 12/31/2017.
 */

public class GameActivity extends Activity{

    //view variables
    CustomView customView;
    TextView clock1;
    TextView clock2;

    //list of the game equations
    ArrayList<Equation> equations;

    CountDownTimer timer;

    //player 1 view
    TextView p1Equation;
    TextView p1Answer1;
    TextView p1Answer2;
    TextView p1Answer3;
    TextView p1ScoreText;

    //player 2 view
    TextView p2Equation;
    TextView p2Answer1;
    TextView p2Answer2;
    TextView p2Answer3;
    TextView p2ScoreText;


    //answer buttons for each players
    ArrayList<TextView> answerButtons;
    ArrayList<TextView> answerButtons2;

    int p1Score;
    int p2Score;

    //index of current equation
    int eqIndex;
    int eqIndex2;

    //player 1 listeners
    View.OnClickListener correctAnswer;
    View.OnClickListener wrongAnswer;


    //player 2 listeners
    View.OnClickListener correctAnswer2;
    View.OnClickListener wrongAnswer2;

    //new game listener
    View.OnClickListener newGameListener;


    RelativeLayout relativeLayout;


    @Override
    public void onCreate(@Nullable Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        setContentView(R.layout.activity_game);

        relativeLayout = (RelativeLayout) findViewById(R.id.gameLayout);

        customView = new CustomView(this);
        relativeLayout.addView(customView);

        clock1 = (TextView) findViewById(R.id.player1Clock);
        clock2 = (TextView) findViewById(R.id.player2Clock);

        equations = new ArrayList<>();
        makeEquations();

        //player 1 view
        p1Equation = (TextView) findViewById(R.id.p1equation);
        p1Answer1 = (TextView) findViewById(R.id.answer1);
        p1Answer2 = (TextView) findViewById(R.id.answer2);
        p1Answer3 = (TextView) findViewById(R.id.answer3);
        p1ScoreText = (TextView) findViewById(R.id.p1Score);

        //player 2 view
        p2Equation = (TextView) findViewById(R.id.p2equation);
        p2Answer1 = (TextView) findViewById(R.id.answer4);
        p2Answer2 = (TextView) findViewById(R.id.answer5);
        p2Answer3 = (TextView) findViewById(R.id.answer6);
        p2ScoreText = (TextView) findViewById(R.id.p2Score);



        //answer buttons
        answerButtons = new ArrayList<>();
        answerButtons2 = new ArrayList<>();


        //initialize score and index
        p1Score = 0;
        p2Score = 0;
        eqIndex = 0;
        eqIndex2 = 0;

        //player 1 listeners
        //increase score and equation index with correct answer
        correctAnswer = new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                p1Score++;
                eqIndex++;
                p1ScoreText.setText("Score: " + p1Score);
                nextEquation();
            }
        };

        //just increase equation index for an incorrect answer
        wrongAnswer = new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                eqIndex++;
                nextEquation();
            }
        };

        //player 2 listeners
        //same as listeners above for player 1
        correctAnswer2 = new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                p2Score++;
                eqIndex2++;
                p2ScoreText.setText("Score: " + p2Score);
                nextEquation2();
            }
        };

        wrongAnswer2 = new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                eqIndex2++;
                nextEquation2();
            }
        };

        //newGame listener
        newGameListener = new View.OnClickListener(){

            @Override
            public void onClick(View v) {
                startNewGame();

            }
        };

        playGame();
    }

    /**
     * resetting everything to start a new game (score and equation index)
     */
    private void startNewGame() {
        p1Score = 0;
        p2Score = 0;
        eqIndex = 0;
        eqIndex2 = 0;

        equations.clear();

        makeEquations();

        //erase buttons
        p1Answer1.setVisibility(View.VISIBLE);
        p1Answer2.setVisibility(View.VISIBLE);
        p1Answer3.setVisibility(View.VISIBLE);

        //erase buttons
        p2Answer1.setVisibility(View.VISIBLE);
        p2Answer2.setVisibility(View.VISIBLE);
        p2Answer3.setVisibility(View.VISIBLE);
        playGame();
    }

    /**
     * The start of the game
     */
    public void playGame(){

        //show equation and answers for both players
        placeEquation(equations.get(eqIndex));
        placeAnswers(equations.get(eqIndex));

        placeEquation2(equations.get(eqIndex2));
        placeAnswers2(equations.get(eqIndex2));

        customView.setTimer();
    }

    /**
     * randomly choose which button contains the correct answer.  Not very sophisticated
     * @return array of answer textviews
     */
    public ArrayList<TextView> chooseAnswerButton(){
        Random random = new Random();

        answerButtons.clear();

        int answerNumber = random.nextInt(3) + 1;
        switch (answerNumber) {
            case 1:
                answerButtons.add(p1Answer1);
                answerButtons.add(p1Answer2);
                answerButtons.add(p1Answer3);
                break;
            case 2:
                answerButtons.add(p1Answer2);
                answerButtons.add(p1Answer1);
                answerButtons.add(p1Answer3);
                break;
            case 3:
                answerButtons.add(p1Answer3);
                answerButtons.add(p1Answer1);
                answerButtons.add(p1Answer2);
                break;
            }
        return answerButtons;
    }

    /**
     * randomly choose the button for the answer for player 2
     * @return arrayList of textviews representing the possible answer choices
     */
    public ArrayList<TextView> chooseAnswerButton2(){
        Random random = new Random();

        answerButtons2.clear();

        int answerNumber = random.nextInt(3) + 1;
        switch (answerNumber) {
            case 1:
                answerButtons2.add(p2Answer1);
                answerButtons2.add(p2Answer2);
                answerButtons2.add(p2Answer3);
                break;
            case 2:
                answerButtons2.add(p2Answer2);
                answerButtons2.add(p2Answer1);
                answerButtons2.add(p2Answer3);
                break;
            case 3:
                answerButtons2.add(p2Answer3);
                answerButtons2.add(p2Answer1);
                answerButtons2.add(p2Answer2);
                break;
        }
        return answerButtons2;
    }


    /**
     * add listeners for the answer buttons for player 1
     */
    public void addAnswerListeners(){
        //player1 buttons
        answerButtons.get(0).setOnClickListener(correctAnswer);
        answerButtons.get(1).setOnClickListener(wrongAnswer);
        answerButtons.get(2).setOnClickListener(wrongAnswer);
    }

    /**
     * add listeners for the answer buttons for player 2
     */
    public void addAnswerListeners2(){
        //player2 buttons
        answerButtons2.get(0).setOnClickListener(correctAnswer2);
        answerButtons2.get(1).setOnClickListener(wrongAnswer2);
        answerButtons2.get(2).setOnClickListener(wrongAnswer2);
    }

    /**
     * changes the equation unless there are no more left
     */
    public void nextEquation(){
        if (eqIndex < 30) {
            placeEquation(equations.get(eqIndex));
            placeAnswers(equations.get(eqIndex));
        }
        else{
            p1Equation.setText("Finished!");
        }
    }

    /**
     * same as above except for player 2
     */
    public void nextEquation2(){
        if(eqIndex2 < 30){
            placeEquation2(equations.get(eqIndex2));
            placeAnswers2(equations.get(eqIndex2));
        }
        else{
            p2Equation.setText("Finished!");
        }

    }

    /**
     * place equations in the correct location for each player
     * @param equation the equation to be placed
     */
    public void placeEquation(Equation equation){
        p1Equation.setText(equation.getEquation());
    }
    public void placeEquation2(Equation equation){
        p2Equation.setText(equation.getEquation());
    }

    /**
     * place answers in correct location for each player
     * @param equation the equation to be placed
     */
    public void placeAnswers(Equation equation){
        //get answer buttons
        ArrayList<TextView> answerButtons = chooseAnswerButton();
        //add answers to buttons
        answerButtons.get(0).setText(Integer.toString(equation.getAnswer()));
        answerButtons.get(1).setText(Integer.toString(equation.getWrong1()));
        answerButtons.get(2).setText(Integer.toString(equation.getWrong2()));

        addAnswerListeners();

    }

    public void placeAnswers2(Equation equation){
        //get answer buttons
        ArrayList<TextView> answerButtons2 = chooseAnswerButton2();
        //add answers to buttons
        answerButtons2.get(0).setText(Integer.toString(equation.getAnswer()));
        answerButtons2.get(1).setText(Integer.toString(equation.getWrong1()));
        answerButtons2.get(2).setText(Integer.toString(equation.getWrong2()));

        addAnswerListeners2();

    }

    /**
     * method for making the list of equations.
     */
    public void makeEquations(){

        for(int i = 0; i < 30; i++){

            Equation equation = new Equation();

            //equation and answer
            String eq = "";
            int answer = 0;

            //pick numbers
            Random random = new Random();

            int first = random.nextInt(10) + 1;
            int second = random.nextInt(10) + 1;

            int operand = random.nextInt(3) + 1;

            switch (operand){
                //addition
                case 1:
                    eq = first + " + " + second;
                    answer = first + second;
                    break;
                //subtraction
                case 2:
                    eq = first + " - " + second;
                    answer = first - second;
                    break;
                //multiplication
                case 3:
                    eq = first + " x " + second;
                    answer = first * second;
                    break;
            }

            equation.setEquation(eq);
            equation.setAnswer(answer);

            int wrongAnswer1 = createWrongAnswer(first, second, answer);
            int wrongAnswer2 = createWrongAnswer(first, second, answer);

            // make sure the two wrong answers are not the same
            while(wrongAnswer1 == wrongAnswer2){
                wrongAnswer2 = createWrongAnswer(first, second, answer);
            }

            equation.setWrong1(wrongAnswer1);
            equation.setWrong2(wrongAnswer2);

            //add equation to the list
            equations.add(equation);
        }
    }

    /**
     * creates incorrect answers for each equation
     * @param first the first number in the equation
     * @param second the second number in the equation
     * @param answer the correct answer
     * @return incorrect answer
     */
    private int createWrongAnswer(int first, int second, int answer){
        int wrongAnswer;

        int difference;
        Random random = new Random();
        int firstOrSecond = random.nextInt(2);

        if(firstOrSecond == 0){
            difference = random.nextInt(first) + 1;
        }
        else{
            difference = random.nextInt(second) + 1;
        }

        int plusOrMinus = random.nextInt(2);
        if(plusOrMinus == 0){
            wrongAnswer = answer + difference;
        }
        else{
            wrongAnswer = answer - difference;
        }

        return wrongAnswer;
    }


    private class CustomView extends View {

        public CustomView(Context context) {
            super(context);
        }

        /**
         * setting the game timer and starting it
         */
        public void setTimer(){
            //30 second timer
            timer = new CountDownTimer(30000, 100) {
                @Override
                public void onTick(long millisUntilFinished) {

                    Date date = new Date(millisUntilFinished);
                    DateFormat formatter = new SimpleDateFormat("ss:SS");
                    String time = formatter.format(date);
                    clock1.setText(time);
                    clock2.setText(time);
                }

                @Override
                public void onFinish() {
                    clock1.setText("00:00");
                    clock2.setText("00:00");
                    endGame();
                }
            }.start();


        }

    }

    /**
     * End game method.  Erasing the answer buttons and displaying the winner.
     * Also, shows new buttons for starting a new game
     */
    private void endGame() {
        //erase player 1 buttons
        p1Answer1.setVisibility(View.INVISIBLE);
        p1Answer2.setVisibility(View.INVISIBLE);
        p1Answer3.setVisibility(View.INVISIBLE);

        //erase player 2 buttons
        p2Answer1.setVisibility(View.INVISIBLE);
        p2Answer2.setVisibility(View.INVISIBLE);
        p2Answer3.setVisibility(View.INVISIBLE);

        //display winner
        if(p1Score > p2Score){
            p1Equation.setText("YOU WIN!!");
            p2Equation.setText("YOU LOSE!!");
        }
        if(p2Score > p1Score){
            p2Equation.setText("YOU WIN!!");
            p1Equation.setText("YOU LOSE!!");
        }
        if(p1Score == p2Score){
            p1Equation.setText("TIE!!");
            p2Equation.setText("TIE!!");
        }

        //change clock to new game buttons
        clock1.setText("Touch for new game");
        clock1.setOnClickListener(newGameListener);

        clock2.setText("Touch for new game");
        clock2.setOnClickListener(newGameListener);

    }
}
