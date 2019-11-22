use std::io;

fn main() {
   println!("Hello, I am Darryl Brown!!!");
   println!("Who are you?");
   let mut your_name = String::new();
   io::stdin().read_line(&mut your_name).expect("Failure to input!");
   println("It is a pleasure in meeting you! {}", your_name);
   }
