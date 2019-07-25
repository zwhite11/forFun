package white.zac.quickdraw;

import android.content.Intent;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Button;

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        final Button button = (Button) findViewById(R.id.startButton);

        button.setOnClickListener(new View.OnClickListener(){
            public void onClick(View v){
                ViewGroup layout = (ViewGroup) button.getParent();
                if(null!=layout){
                    layout.removeView(button);
                }

                Intent intent = new Intent(MainActivity.this, GameActivity.class);
                startActivity(intent);
            }

        });
    }
}
