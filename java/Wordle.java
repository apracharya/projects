import java.util.Random;
import java.util.Scanner;

/**
 * @apurva
 */

public class Wordle {

    static Scanner scan = new Scanner(System.in);
    public static void main(String[] args) {

        Random random = new Random();
        int randomInt = random.nextInt(5);
        System.out.println(randomInt);
        String[] words = {"Glove", "Feast", "Bagle", "Light", "Moped"};
        String[] userInput = new String[6];

        String randomWord = words[randomInt].toLowerCase();

        for (int i = 0; i < userInput.length; i++) {
            System.out.println("Enter a word!");
            userInput[i] = scan.nextLine().toLowerCase();
            if(userInput[i].length() != 5){
                System.out.println("Word must be of length 5.");
                return;
            }
            
            // for (int j = 0; j < randomWord.length(); j++) {
                
                for (int k = 0; k < userInput[i].length(); k++) {
                    char c = userInput[i].charAt(k);
                    String s = String.valueOf(c);
                    if(randomWord.contains(s)){
                        System.out.println("Contains " + s + ": " + true);
                        if(randomWord.indexOf(s) == userInput[i].indexOf(s)){
                            System.out.println("Correct position of " + s + ": "
                             + true);
                        } else {
                            System.out.println("Correct position of " + s + ": "
                            + false);
                        }
                    } else {
                        System.out.println("Contains " + s + ": " + false);
                    }
                // }
            }
            
            if(randomWord.equalsIgnoreCase(userInput[i])){
                System.out.println("Guessed Correctly!");
                return;
            }
        }

        System.out.println("Word was " + randomWord);

    }
}