import './App.css';
import Tweet from "./tweet.js" // sonradan ekledik olmak zorunda


function App() {

  const Tweets = [{name: "Veli", message:"Hi, everyone im Veli"},
  {name: "Mehmet", message:"Hi, everyone im Mehmet"},
  {name: "Ali", message:"Hi, everyone im Ali"},
  {name: "Ali", message:"Hi, everyone im Ali"},
  {name: "Ali", message:"Hi, everyone im Ali"},
  {name: "Ali", message:"Hi, everyone im Ali"},
  {name: "Ali", message:"Hi, everyone im Ali"},
  ]
/************************ COMPONENTSLER ARASINDA PROPS KULLANIMI**************************/
/* let name = "Veli" */ /* burayı da bağlamadan sonra sildik */

return (/*  return kısmı bizim html sayfamızdır */
    <div>
     {/* burayı sildik çünkü app.jsde bu componenti bağladık  */}{/* <Tweet firstname = {name}/> */} {/* bir componenti mevcut componentin içinde gorebilmek için burda tweet ettik */}
                      {/* Component büyük harf olmak zorunda yoksa ES7 onu algılamaz  */}   
  {Tweets.map((tweet) => (
    <Tweet firstname = {tweet.name} message={tweet.message}/> /* burdaki tweets object array'in içindeki objeleri algılıyor */
  )
  )}
    </div>
  );
}

export default App;




