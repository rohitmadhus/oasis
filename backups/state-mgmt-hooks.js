// use for reference

const [products, setProducts] = useState([]);
const [loading, setLoading] = useState(false);
const [error, setError] = useState(false);
// use effect when component mount to page will only once
useEffect(() => {
  const fetchProducts = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get("api/products");
      setLoading(false);
      setProducts(data);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };
  fetchProducts();
}, []);
