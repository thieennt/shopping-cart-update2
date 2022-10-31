import { Col, Rate, Row, Tabs } from "antd";
import { GetStaticPaths, GetStaticProps } from "next";
import { useDispatch } from "react-redux";
import Layout from "../../components/Layout";
import AllProduct from "../../components/Products/AllProduct";
import ProductDetail from "../../components/Products/ProductDetails";
import Review from "../../components/Products/Review";
import { addToCart, decreaseProduct } from "../../redux/slice/cartSlice";
import { IoMdHeartEmpty } from "react-icons/io";
import Description from "../../components/Products/Description";

const Product = ({ product }: any) => {
  console.log(product);
  const dispatch = useDispatch();

  return (
    <div>
      <Layout>
        <div className="product-detail-container">
          <div className="product-detail-wrapper">
            <Row gutter={16}>
              <Col className="gutter-row" span={12}>
                <div className="product-image">
                  <img src={product.image} alt={product.name} />
                </div>
              </Col>
              <Col className="gutter-row" span={12}>
                <div className="product-info">
                  <h1 className="name">{product.name}</h1>
                  <div className="branch">
                    <span>Brands:armani</span>
                    <span>
                      <Rate allowHalf disabled defaultValue={4.5} />
                      (25 reviews)
                    </span>
                  </div>
                  <div></div>
                  <p className="price">${product.price}</p>
                  <p className="description">{product.description}</p>
                  <div className="actions">
                    <div className="add-to-cart">
                      <button onClick={() => dispatch(addToCart(product))}>
                        ADD TO CART
                      </button>
                    </div>
                    <span className="add-to-wishlist">
                      <button>
                        <IoMdHeartEmpty style={{ fontSize: 20 }} />
                      </button>
                    </span>
                  </div>
                </div>
              </Col>
            </Row>
            <Row>
              <div className="tabs-section">
                <Tabs
                  defaultActiveKey="1"
                  centered
                  items={[
                    {
                      label: "Description",
                      key: "1",
                      children: <Description />,
                    },
                    {
                      label: "Reviews",
                      key: "2",
                      children: <Review />,
                    },
                  ]}
                />
              </div>
            </Row>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Product;

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch(
    "https://63522738dfe45bbd55d03832.mockapi.io/products"
  );
  const products = await res.json();

  const paths = products.map((product: any) => ({
    params: { id: product.id },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }: any) => {
  const res = await fetch(
    `https://63522738dfe45bbd55d03832.mockapi.io/products/${params.id}`
  );
  const product = await res.json();
  return {
    props: {
      product,
      params,
    },
  };
};
