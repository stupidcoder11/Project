import java.awt.*;
import javax.swing.*;
import java.awt.event.*;

public class chatBot
{
	private JTextArea chatArea = new JTextArea();
	private JTextField chatBox = new JTextField();
	
	public chatBot()
	{
		JFrame frame = new JFrame();			// frame object for JFrame
		frame.setDefaultCloseOperation(1);		// closing the panel
		frame.setVisible(true);					// turns on the visibility
		frame.setResizable(false);				// makes the panel non-resizable
		frame.setLayout(null);
		frame.setSize(600, 600);				// creates panel of width 600, height 600
		frame.setTitle("Patty - The ChatBot 🤖");	// sets the title
		frame.setBackground(Color.cyan);
		
		frame.add(chatArea);					// adds chat area
		frame.add(chatBox);						// adds chat box
		
		// For text area
		chatArea.setSize(600, 500);
		chatArea.setLocation(0, 0);
		chatArea.setBackground(Color.yellow);
		
		// For text field
		chatBox.setSize(600, 100);
		chatBox.setLocation(0, 500);
		chatBox.setBackground(Color.green);
		
		
		chatBox.addActionListener(new ActionListener()
		{
			public void actionPerformed(ActionEvent arg0) 
			{
				String gText = chatBox.getText().toLowerCase();	// takes user input and converts the string to lower case
				chatArea.append("You -> " + gText + "\n");		// displays user message
				chatBox.setText(""); 							// clear chat box
				
				String userMsgLib[][] = {{"hi", "hello", "hey there", "holla"},															// greetings
									 	{"how are you","what's up", "how do you do"},													// questions for well-being
										{"you are nice", "you are pretty", "pretty", "nice", "smart", "intelligent","brilliant", "lovely", "amazing"},	// compliments
										{"see ya","bye", "tata", "see you soon", "see you", "goodbye", "farewell", "take care"},		// goodbyes
										{"what's your name", "do you have a name", "what are you", "what is your name", "name"}};									// identification			
				
				boolean flag = false;
				 
				for(int i=0; i<userMsgLib.length; i++)
				{
					for(int j = 0; j<userMsgLib[i].length; j++)
					{
						if(i == 0 && gText.contains(userMsgLib[i][j]))					// if input is a greeting and matches library
						{
							String reply[] = {"Hi there!", "Oh Hi!", "Hello!"};
							int idx = (int)(Math.random()*3);
							bot(reply[idx]);
							flag = true;
							break;
						}
						else if(i == 1 && gText.contains(userMsgLib[i][j]))				// if input is a question of well-being & matches user library
						{
							String reply[] = {"I am good", "I am fine. Thank you.", "I am great!"};
							int idx = (int)(Math.random()*3);
							bot(reply[idx]);
							flag = true;
							break;
						}
						else if(i == 2 && gText.contains(userMsgLib[i][j]))				// if input is a compliment & matches user library
						{
							String reply[] = {"Oh my god! Thanks","Oh thank you!","Ahem! Ahem! I am blushing!"};
							int idx = (int)(Math.random()*3);
							bot(reply[idx]);
							flag = true;
							break;
						}
						else if(i == 3 && gText.contains(userMsgLib[i][j]))				// if input is a farewell & matches user library
						{
							
							String reply[] = {"Bye Bye!","Good bye!", "See you again!","Hasta la vista!"};
							int idx = (int)(Math.random()*4);
							bot(reply[idx]);
							flag = true;
							break;
						}
						else if(i == 4 && gText.contains(userMsgLib[i][j]))
						{
							String reply[] = {"I am Patty! A chatbot!", "My name is Patty. I am a bot", "Myself Patty - the chatbot"};
							int idx = (int)(Math.random()*reply.length-1);
							bot(reply[idx]);
							flag = true;
							break;
						}
					}
				}
				
				
				if(flag == false)
				{
					int rand = (int)(Math.random()*3);		// generates random integers [0,2]
					
					String response[] = {"Sorry what?", "Come again?", "I don't understand that."};
					
					bot(response[rand]);
				}
			}
		});
	}
	
	private void bot(String string)
	{
		chatArea.append("Bot -> " + string + "\n\r");	
	}
	
	public static void main(String[] args)
	{
		new chatBot();
	}
}