import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux';
import { getItems, deleteItem } from '../actions/itemActions';
import PropTypes from 'prop-types';

class ShoppingList extends Component {

    componentDidMount() {
        this.props.getItems(); // call it
    }

    onDeleteClick = (id) => {
        this.props.deleteItem(id);
    };

    render() {
        // destructing out items (state object).
        // items = array within state (from reducers)
        // same as this.props.item.items
        const { items } = this.props.item
        return (
            <Container>
                <ListGroup>
                    <TransitionGroup className="shopping-list">
                        {items.map(({ _id, name }) => ( //Underscore _id from MongoDB
                            <CSSTransition key={_id} timeout={500} classNames="fade">
                                <ListGroupItem>
                                    <Button
                                        className="remove-btn"
                                        color="danger"
                                        size="sm"
                                        onClick={this.onDeleteClick.bind(this, _id)}
                                    >&times;</Button>
                                    {name}
                                </ListGroupItem>
                            </CSSTransition>
                        ))}
                    </TransitionGroup>
                </ListGroup>
            </Container>
        );
    }
}

// Use PropTypes for data validation in dev mode: https://reactjs.org/docs/typechecking-with-proptypes.html
// when you import an action from redux, it gets stored within the component property
ShoppingList.propTypes = {
    getItems: PropTypes.func.isRequired,
    item: PropTypes.object.isRequired //represents state that is an object
}

const mapStateToProps = (state) => ({
    item: state.item //'item' from reducer
})
export default connect(mapStateToProps, { getItems, deleteItem })(ShoppingList);