
void shortbeep() {
  digitalWrite(2, HIGH);
  delay(200);
  digitalWrite(2, LOW);
  delay(600);
}


void longbeep() {
  digitalWrite(2, HIGH);
  delay(600);
  digitalWrite(2, LOW);
  delay(600);
}


void blinkLetter(const char* code) {
  for (int i = 0; code[i] != '\0'; i++) {
    if (code[i] == '.') {
      shortbeep();
    } else if (code[i] == '-') {
      longbeep();
    }
  }
  delay(600); 
}

// Setup
void setup() {
  pinMode(2, OUTPUT);
}

// Main loop
void loop() {
  // Morse code for "HELLO"
  blinkLetter("...."); // H
  blinkLetter(".");    // E
  blinkLetter(".-.."); // L
  blinkLetter(".-.."); // L
  blinkLetter("---");  // O

  delay(1500); // Wait before repeating
}