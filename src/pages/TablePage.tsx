import React, {useEffect, useState} from 'react';
import {CustomTable} from './components/CustomTable';

interface Security {
  SECID: string;
  BOARDID: string;
  SHORTNAME: string;
  PREVPRICE: number;
  MINSTEP: number;
  PREVWAPRICE: number;
  ISSUESIZE: number;
  PREVLEGALCLOSEPRICE: number;
  LISTLEVEL: number;
  PREVDATE: string;
  SETTLEDATE: string;
}

interface Data {
  securities: Security[];
}

export function TablePage() {
  const [data, setData] = useState<Data[] | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(
      'https://iss.moex.com/iss/engines/stock/markets/shares/boardgroups/57/securities.json?iss.meta=off&iss.json=extended&lang=ru&security_collection=3&sort_column=VALTODAY&sort_order=desc',
    )
      .then((res) => res.text())
      .then((resText) => {
        const jsonString = resText.replace(/^JSON_CALLBACK\(/, '').replace(/\);$/, '');
        const jsonData = JSON.parse(jsonString);

        if (Array.isArray(jsonData) && jsonData.length === 2) {
          setData(jsonData as Data[]);
        } else {
          console.error('Invalid data');
        }

        setLoading(false);
      })
      .catch((error) => {
        console.error('Error:', error);
        setLoading(false);
      });
  }, []);
  const columns = [
    {
      title: 'SECID',
      dataIndex: 'SECID',
      key: 'SECID',
    },
    {
      title: 'SHORTNAME',
      dataIndex: 'SHORTNAME',
      key: 'SHORTNAME',
    },
    {
      title: 'PREVPRICE',
      dataIndex: 'PREVPRICE',
      key: 'PREVPRICE',
    },
    {
      title: 'MINSTEP',
      dataIndex: 'MINSTEP',
      key: 'MINSTEP',
    },
    {
      title: 'PREVWAPRICE',
      dataIndex: 'PREVWAPRICE',
      key: 'PREVWAPRICE',
    },
    {
      title: 'ISSUESIZE',
      dataIndex: 'ISSUESIZE',
      key: 'ISSUESIZE',
    },
    {
      title: 'PREVLEGALCLOSEPRICE',
      dataIndex: 'PREVLEGALCLOSEPRICE',
      key: 'PREVLEGALCLOSEPRICE',
    },
    {
      title: 'LISTLEVEL',
      dataIndex: 'LISTLEVEL',
      key: 'LISTLEVEL',
    },
    {
      title: 'PREVDATE',
      dataIndex: 'PREVDATE',
      key: 'PREVDATE',
    },
    {
      title: 'SETTLEDATE',
      dataIndex: 'SETTLEDATE',
      key: 'SETTLEDATE',
    },
  ];

  return (
    <div>
      <h2 style={{textAlign: 'center', marginTop: '20px', color: 'darkBlue'}}>
        ПЕРВАЯ СТРАНИЦА С ТАБЛИЦЫ САЙТА МОСБИРЖИ
      </h2>
      {loading ? (
        <p>Загрузка...</p>
      ) : data && data.length === 2 && data[1].securities && data[1].securities.length > 0 ? (
        <CustomTable
          className="customTable"
          dataSource={data[1].securities.slice(0, 25)}
          columns={columns}
          rowKey={(record) => record.SECID}
        />
      ) : (
        <p>Нет данных.</p>
      )}
    </div>
  );
}
