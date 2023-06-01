import './App.css';
import ImageSlider from './components/ImageSlider.tsx';

const images = [
  "https://images.pexels.com/photos/15103837/pexels-photo-15103837/free-photo-of-canh-d-ng-mua-he-m-t-tr-i-v-n.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/16931542/pexels-photo-16931542/free-photo-of-yeu-lang-m-n-mua-he-ban.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/15823316/pexels-photo-15823316/free-photo-of-mua-he-m-t-tr-i-mua-dong-la.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
]
function App() {
  return (
    <ImageSlider images={images} isAutoPlay={false}/>
  );
}

export default App;
