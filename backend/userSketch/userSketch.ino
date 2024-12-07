#define LED_PIN 2


void dot(){
    // Your setup code here
    digitalWrite(LED_PIN, HIGH);
    delay(200);
    digitalWrite(LED_PIN, LOW);
    delay(200);

}


void dash(){
    digitalWrite(LED_PIN, HIGH);
    delay(600);
    digitalWrite(LED_PIN, LOW);
    delay(200);
}

void setup() {

  pinMode(LED_PIN,OUTPUT);
  }
  

void loop() {
    // Your loop code here
   dot(); //s
   dot();
   dot();

   delay(400);

   dot(); //e

   delay(400);

   dash(); //m
   dash();

   delay(400);

   dash(); //o
   dash();
   dash();

   delay(2000);
  }