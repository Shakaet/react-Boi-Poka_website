import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getItemFromLs } from '../AddToDb';
import Book from '../Book/Book';

const ListTedBook = () => {

    let [readData,setReadData]=useState([])

    let data= useLoaderData()

    useEffect(()=>{
        let getLsData=getItemFromLs()

        console.log(data,getLsData)

        let dataInt= getLsData.map(id=>parseInt(id))

        console.log(typeof dataInt)

        let readBookList= data.filter(item=>dataInt.includes(item.bookId))

        setReadData(readBookList)
    },[])

    
    return (
        <div>

            <h1>Hello</h1>

            <Tabs>
                <TabList>
                <Tab>Read Books</Tab>
                <Tab>WishList Book</Tab>
                </TabList>

                <TabPanel>
                <h2 className='text-center mb-10'>Total Read Books:{readData.length}</h2>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    readData.map(book=><Book book={book}></Book>)
                }
                </div>
                </TabPanel>
                <TabPanel>
                <h2>Any content 2</h2>
                </TabPanel>
            </Tabs>



            
        </div>
    );
};

export default ListTedBook;