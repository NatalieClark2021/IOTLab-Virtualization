void setup() { Serial.begin(9600); pinMode(2, OUTPUT); Serial.println(1); } void loop() { digitalWrite(2, HIGH); Serial.println(1); delay(100); digitalWrite(2, LOW); Serial.println(0); delay(2000); }
