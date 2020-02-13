
paypal.Button.render({

    env: 'sandbox',
    client: {
        sandbox: 'demo_sandbox_client_id',
        production: 'demo_production_client_id'
    },

    locale: 'en_US',
    style: {
        size: 'small',
        color: 'gold',
        shape: 'pill',
    },

    commit: true,

    payment: function(data, actions) {
        return actions.payment.create({
            transactions: [{
                amount: {
                    total: '250.00',
                    currency: 'CAD'
                }
            }]
        });
    },
    onAuthorize: function(data, actions) {
        return actions.payment.execute().then(function() {

            window.alert('Thank you for your purchase!');
        });
    }
}, '#paypal-button');