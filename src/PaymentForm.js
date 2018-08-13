import React from 'react';
import SquarePaymentForm from './sqpaymentform';

class PaymentForm extends React.Component {
    requestCardNonce = (event) => {
        event.preventDefault();
        SquarePaymentForm.requestCardNonce();
    }

    render() {
        return (
            <div>
                <div id="sq-ccbox">
                    <form id="nonce-form" novalidate action="path/to/payment/processing/page" method="post">
                        Pay with a Credit Card
                    <table>
                            <tbody>
                                <tr>
                                    <td>Card Number:</td>
                                    <td><div id="sq-card-number"></div></td>
                                </tr>
                                <tr>
                                    <td>CVV:</td>
                                    <td><div id="sq-cvv"></div></td>
                                </tr>
                                <tr>
                                    <td>Expiration Date: </td>
                                    <td><div id="sq-expiration-date"></div></td>
                                </tr>
                                <tr>
                                    <td>Postal Code:</td>
                                    <td><div id="sq-postal-code"></div></td>
                                </tr>
                                <tr>
                                    <td colspan="2">
                                        <button id="sq-creditcard" className="button-credit-card" onClick={this.requestCardNonce}>
                                            Pay with card
                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <input type="hidden" id="card-nonce" name="nonce" />
                    </form>
                </div>

                <div id="sq-walletbox">
                    Pay with a Digital Wallet
                <div id="sq-apple-pay-label" className="wallet-not-enabled">Apple Pay for Web not enabled</div>
                    <button id="sq-apple-pay" className="button-apple-pay"></button>

                    <div id="sq-masterpass-label" className="wallet-not-enabled">Masterpass not enabled</div>
                    <button id="sq-masterpass" className="button-masterpass"></button>
                </div>
            </div>
        );
    }
}

export default PaymentForm;