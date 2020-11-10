import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import {GET_MEMBER_DATA, DELETE_MEMBER_DATA} from '../../../action';
import {Container, Form, SmallTitle, Button} from '../styles';
import PropTypes from 'prop-types';

const Index = (props) => {

    return (
        <>
        </>
    )
};

const mapStateToProps = state => ({
    data : ''
})

const mapDispatchToProps = dispatch => ({
    getData:() => {
        dispatch({type: ''});
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Index);