import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const ListTedBook = () => {

    let data= useLoaderData()

    console.log(data.length)
    return (
        <div>

            <h1>Hello</h1>

            <Tabs>
                <TabList>
                <Tab>Read Books</Tab>
                <Tab>WishList Book</Tab>
                </TabList>

                <TabPanel>
                <h2>Any content 1</h2>
                </TabPanel>
                <TabPanel>
                <h2>Any content 2</h2>
                </TabPanel>
            </Tabs>



            
        </div>
    );
};

export default ListTedBook;