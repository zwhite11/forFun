package white.zac.quickdraw;

import android.app.Activity;
import android.content.Context;
import android.graphics.Canvas;
import android.graphics.Color;
import android.graphics.Paint;
import android.graphics.Rect;
import android.graphics.drawable.Drawable;
import android.os.Bundle;
import android.os.CountDownTimer;
import android.view.MotionEvent;
import android.view.View;
import android.widget.Button;
import android.widget.RelativeLayout;
import android.widget.TextView;

import java.util.Random;

/**
 * Created by zacsw on 12/28/2017.
 * A two player game testing reaction time.  which ever player taps their button
 * quicker wins the game
 */

public class GameActivity extends Activity{

    private Drawable circleDrawable1;
    private Drawable circleDrawable2;

    CustomView customView;

    public TextView gameText;

    Drawable topPlayer;
    Drawable bottomPlayer;

    float timeLeft;

    // whether or not the game has started
    boolean active;

    boolean startNewGame;

    Button newGameButton1;
    Button newGameButton2;

    int p1Score;
    public TextView p1ScoreText;
    int p2Score;
    public TextView p2ScoreText;

    View.OnClickListener newGameListener;
    boolean drawn = false;

    @Override
    protected void onCreate( Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_game);

        circleDrawable1 = getResources().getDrawable(R.drawable.circle1);
        circleDrawable2 = getResources().getDrawable(R.drawable.circle2);
        topPlayer = circleDrawable1;
        bottomPlayer = circleDrawable2;

        RelativeLayout relativeLayout = (RelativeLayout) findViewById(R.id.gameLayout);

        customView = new CustomView(this);
        relativeLayout.addView(customView);
        gameText = (TextView) findViewById(R.id.gameMessage);

        //score text
        p1ScoreText = (TextView) findViewById(R.id.p1Score);
        p2ScoreText = (TextView) findViewById(R.id.p2Score);

        //new game buttons
        newGameButton1 = (Button) findViewById(R.id.newGameButton);
        newGameButton2 = (Button) findViewById(R.id.newGameButton2);

        //reset score
        p1Score=0;
        p2Score=0;

    }

    private class CustomView extends View{

        CountDownTimer drawTimer;

        public CustomView(Context context) {
            super(context);
        }

        /**
         * Manually draw each of the player's buttons on the screen
         * @param canvas the game screen to draw on
         */
        public void drawButtons(final Canvas canvas){
            Paint paint = new Paint();

            //paint for buttons
            paint.setColor(Color.BLACK);
            paint.setStyle(Paint.Style.STROKE);
            paint.setStrokeWidth(3);

            //horizontal dividers
            int hMiddle = getWidth()/2;
            int hQuarter1 = hMiddle/2;
            int hQuarter3 = hQuarter1*3;

            //vertical dividers
            int vThird = getHeight()/3;
            int vSecondThird = vThird * 2;

            Rect topRect = new Rect(hQuarter1, 30, hQuarter3, vThird);
            Rect bottomRect = new Rect(hQuarter1, vSecondThird, hQuarter3, (getHeight() -30));

            topPlayer.setBounds(topRect);
            topPlayer.draw(canvas);

            bottomPlayer.setBounds(bottomRect);
            bottomPlayer.draw(canvas);

            gameText.setText("Get Ready!");

            drawn = true;

        }

        /**
         * Randomly set the time before the draw and start it
         */
        public void setDrawTimer(){
            //handle clock
            Random rand = new Random();

            //any number of seconds between 1 and 4
            timeLeft = rand.nextFloat() * (4) + 1;

            active = true;

            //count down timer
            drawTimer = new CountDownTimer((long)(timeLeft*1000), 1000) {

                @Override
                public void onTick(long millisUntilFinished) {
                    timeLeft = (int) millisUntilFinished;
                }

                @Override
                public void onFinish() {
                    gameText.setText("DRAW!");
                    timeLeft = 0;
                }
            };

            drawTimer.start();

        }

        /**
         * Handling each touch.  Which ever touch registers first will add a point to their
         * score.
         * @param event the individual touch
         * @return
         */
        @Override
        public boolean onTouchEvent(MotionEvent event) {

            switch (event.getAction()){
                case MotionEvent.ACTION_DOWN:
                    Rect p1Bounds = topPlayer.getBounds();
                    Rect p2Bounds = bottomPlayer.getBounds();


                    //player 1 touch
                    //if player 1 has touched inside the circle
                    if(active && p1Bounds.contains((int) event.getX(), (int) event.getY())){
                        //touch too early
                        if(timeLeft > 0){
                            drawTimer.cancel();
                            //update game board
                            gameText.setText("Too soon Player 1!");
                            p2Score ++; //increase the opposing player's score
                            p2ScoreText.setText("Score :" + p2Score);
                        }
                        //valid touch
                        else{
                            gameText.setText("Player 1 Wins!");
                            p1Score ++;
                            p1ScoreText.setText("Score :" + p1Score);

                        }

                        active = false; // game is over - not active
                        showNewGameButtons();

                        this.postInvalidate();
                    }

                    //player 2 touch
                    //if player 2 has touched inside the circle
                    if(active && p2Bounds.contains((int) event.getX(), (int) event.getY())){
                        //touch too early
                        if(timeLeft > 0){
                            drawTimer.cancel();
                            gameText.setText("Too soon Player 2!");
                            p1Score ++; //increase the opposing player's score
                            p1ScoreText.setText("Score :" + p1Score);

                        }
                        //valid touch
                        else{
                            gameText.setText("Player 2 Wins!");
                            p2Score ++;
                            p2ScoreText.setText("Score :" + p2Score);
                        }
                        active = false;
                        showNewGameButtons();
                        this.postInvalidate();
                    }

            }
            return super.onTouchEvent(event);
        }

        /**
         * Show the "new game" button after a game has been completed
         */
        private void showNewGameButtons() {
            newGameButton1.setVisibility(VISIBLE);
            newGameButton2.setVisibility(VISIBLE);

            newGameListener = new View.OnClickListener(){

                @Override
                public void onClick(View v) {
                    startNewGame = true;

                    // hide new game buttons once selected
                    newGameButton1.setVisibility(View.INVISIBLE);
                    newGameButton2.setVisibility(View.INVISIBLE);

                    drawn = false;

                    postInvalidate();
                }
            };

            newGameButton1.setOnClickListener(newGameListener);
            newGameButton2.setOnClickListener(newGameListener);
        }


        @Override
        protected void onDraw(Canvas canvas) {
            if(!drawn){
                drawButtons(canvas);
                setDrawTimer();
            }

        }

    }


}
