
import React, { PureComponent } from 'react';

import { FlatList, ActivityIndicator } from 'react-native';
import { Container, Content, Button, Left, Right, Icon, Header, Title, Body } from 'native-base';
import TransItem from '../../components/TransItem';
import SearchBar from '../../components/SearchBar';
export default class PokeList extends PureComponent {

    state = {
        transList: [],
        loading: true,
    }

    loadAllTransInfo = async () => {
 
        try {
            const transApiCall = await fetch('https://lreypjgj1c.execute-api.ap-southeast-2.amazonaws.com/dev/transportation',
            {method: 'GET',
             headers: {
                      'x-api-key': '6PSJVe1Jr733JRzxP0uAe3TuqBxRqlbE9f4ua8Wf',
                   }});
            const trans = await transApiCall.json();
            this.setState({transList: trans.results, loading: false});
        } catch(err) {
            console.log("Error fetching data-----------", err);
        }
    }

    loadTransInfoBySearch = async (searchType,searchValue) => {
 
        const transApiCall = null;
        try {

            switch (searchType)
            {
                case 'departureTimeMin':
                        transApiCall = await fetch('https://lreypjgj1c.execute-api.ap-southeast-2.amazonaws.com/dev/transportation?departureTimeMin=${encodeURIComponent(searchValue)}',
                        {method: 'GET',
                         headers: {
                                  'x-api-key': '6PSJVe1Jr733JRzxP0uAe3TuqBxRqlbE9f4ua8Wf',
                               }});
                               break;
                case 'departureTimeMax':
                    transApiCall = await fetch('https://lreypjgj1c.execute-api.ap-southeast-2.amazonaws.com/dev/transportation?departureTimeMax=${encodeURIComponent(searchValue)}',
                    {method: 'GET',
                        headers: {
                                'x-api-key': '6PSJVe1Jr733JRzxP0uAe3TuqBxRqlbE9f4ua8Wf',
                            }});
                            break;
                case 'typeId':
                        transApiCall = await fetch('https://lreypjgj1c.execute-api.ap-southeast-2.amazonaws.com/dev/transportation?typeId=${searchValue}',
                        {method: 'GET',
                            headers: {
                                    'x-api-key': '6PSJVe1Jr733JRzxP0uAe3TuqBxRqlbE9f4ua8Wf',
                                }});
                            break;

            }

            if(!transApiCall)
            {
                const trans = await transApiCall.json();
                this.setState({transList: trans.results, loading: false});
            }
            
        } catch(err) {
            console.log("Error fetching data-----------", err);
        }


    }

    componentDidMount()
    {
        this._asyncReqAll= this.loadAllTransInfo()
    }

    componentWillUnmount()
    {
        this.clearAsync();
    }

    clearAsync = () =>
    {
        if (this._asyncReqAll)
            this._asyncReqAll.cancel();

        if (this._asyncReqSearch)
            this._asyncReqSearch.cancel();
    }

    renderItem = (data) => {
        return <TransItem item={data.item} />;
    }

    onSearch = (type,value) =>
    {
        this._asyncReqSearch= this.loadTransInfoBySearch(type,value)
    }

    render() {

        const { transList, loading } = this.state;

        return (
            <Container>
                    <Header androidStatusBarColor="#5D4037" >
                        <Left>
                            <Button transparent>
                                <Icon name="menu" />
                            </Button>
                        </Left>
                        <Body>
                            <Title>Transport Info</Title>
                        </Body>
                        <Right />
                    </Header>
                    <SearchBar onPress = {this.onSearch} />
                    <Container>
                        <Content>
                            {loading &&
                                <ActivityIndicator />
                            }
                            {transList &&
                                <FlatList 
                                data={transList}
                                renderItem={this.renderItem}
                                keyExtractor={(item) => item.name} 
                            />
                            }
                        </Content>
                    </Container>
            </Container>
        );
    };
};
