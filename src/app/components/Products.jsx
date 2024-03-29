"use client";
import { useEffect, useState } from "react";
import { db } from "../../../config/firebase";
import { collection, getDocs } from "firebase/firestore";
import Card from "./Card";
import { BrowserRouter, Routes, Route } from 'react-router-dom'

  function DatabaseRead({ currentPage, itemsPerPage }) {
    const [produto, setProduto] = useState([]);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    useEffect(() => {
      async function fetchData() {
        try {
          async function getProduto() {
            const dataCollection = collection(db, "produtos");
            const dataSnapshot = await getDocs(dataCollection);
            const dataList = dataSnapshot.docs.map((doc) => doc.data());

            // Filter the productList to include only items where stock is true
          const filteredProductList = dataList.filter(item => item.stock === true);

            // Ordenar a lista em ordem crescente com base no campo "produto"
          const sortedDataList = filteredProductList.sort((a, b) => {
            // Campo "produto" como uma String
            return a.produto.localeCompare(b.produto);
          });

            setProduto(sortedDataList.slice(startIndex, endIndex));
          }
          getProduto();
        } catch (error) {
          console.error("Erro:", error);
        }
      }

      fetchData();
    }, [currentPage, endIndex, startIndex]);

    return (
      <div className="flex flex-wrap gap-2 px-16 items-center justify-center">
        { produto.map((item) => {
          if (Array.isArray(item.imagens) && item.imagens.length > 0) {
            const primeiroLink = item.imagens[0];
            return (
              <Card
                key={item.id}
                title={item.produto}
                shortdescription={item.shortdescription}
                ratings={item.avaliacao}
                preco={item.valor}
                link={primeiroLink}
                href="/"
              />
            );
          }
        })}
      </div>
    );
  }

  const Pagination = ({ currentPage, totalPages, setCurrentPage }) => {
    const pages = [...Array(totalPages).keys()].map((page) => page + 1);
    return (
      <div className="pagination space-x-5">
        { pages.map((page) => (
          <button key={page} onClick={() => setCurrentPage(page)} className={`px-4 py-2 rounded-full mr-2 ${ currentPage === page ? "bg-blue-500 text-white" : "bg-white text-blue-500 hover:bg-blue-200"}`}>{page}
          </button>
        ))}
      </div>
    );
  };

  export default function Product() {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 20;
    const [totalPages, setTotalPages] = useState(1);

    useEffect(() => {
      async function fetchTotalItems() {
        try {
          const dataCollection = collection(db, "produtos");
          const dataSnapshot = await getDocs(dataCollection);
          const totalItems = dataSnapshot.docs.length;
          const calculatedTotalPages = Math.ceil(totalItems / itemsPerPage);
          setTotalPages(calculatedTotalPages);
        } catch (error) {
          console.error("Erro ao obter total de itens:", error);
        }
      }
      fetchTotalItems();
    }, []);

    return (
      <div className="flex flex-col justify-center items-center">
        <div className="py-5 flex flex-wrap justify-center">
          <DatabaseRead currentPage={currentPage} itemsPerPage={itemsPerPage} />
        </div>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          setCurrentPage={setCurrentPage}
        />
      </div>
    );
  }
