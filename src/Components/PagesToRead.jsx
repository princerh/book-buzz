/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import { BarChart, ResponsiveContainer, Bar, Cell, XAxis, YAxis, CartesianGrid, Label } from 'recharts'; // Fixed import

import { getReadBooks } from '../Utilities/Utilities';
import { Helmet } from 'react-helmet';

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink', '#FF5733', '#C70039', '#900C3F', '#581845', '#4CAF50'];

const getPath = (x, y, width, height) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
  Z`;
};

const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;

  return <path d={getPath(x, y, width, height)} stroke="" fill={fill} />;
};

const PagesToRead = () => {
  const [readBooks, setReadBooks] = useState([]);
  
  useEffect(() => {
    const fetchReadBooks = async () => {
      const books = await getReadBooks();
      setReadBooks(books);
    };

    fetchReadBooks();
  }, []);

  return (
    <div style={{ width: '100%', height: 500 }}>
      <Helmet> <title>Book Buzz | Read Pages </title></Helmet>
      <div className="mt-4 text-xl font-bold text-red-500">
    <marquee>Add books to read list from book details section to watch them here. This chart will show only the read books</marquee>
</div>
      <ResponsiveContainer width="100%" height="90%"> {/* Fixed syntax */}
        <BarChart
          className='py-5'
          data={readBooks}
          margin={{
            top: 20,
            right: 50,
            left: 0,
            bottom: 85,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="bookName" angle={-20} textAnchor="end" interval={0} />
          <YAxis />
          <Label value="Book Names" offset={0} position="bottom" />
          <Label value="No. of pages" offset={0} position="insideLeft" angle={-90} />
          <Bar dataKey="totalPages" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
            {readBooks.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index % 20]} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PagesToRead;
