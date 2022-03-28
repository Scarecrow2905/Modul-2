function updateViewPay(){
html = `
    <div class="pay-main">
        <div class="pay-title"> 
    </div>

`

return html;
};


/*<head>
<title>Betalingsdemo</title>
<link rel=«stylesheet» href=«style.css»>
<script
src=«https://secure.transactiongateway.com/token/collect.js»
data-tokenization-key=«your-key-goes-here»
data-variant=«inline»
data-field-ccnumber-placeholder = ’0000 0000 0000 0000’
data-field-ccexp-placeholder = ’10 / 22’
data-field-cvv-placeholder = ‘123’
data-custom-css=‘{
«border-style» : «solid»,
«border-color» : «c7c7c7»,
«border-width» : «1px»,
«border-radius» : «3px»,
«padding» : «6px»,
«font-size» : «16px»,
«height» : «33px»
}’

</script>

</head>

<div class=«nav»>
<div class=«nav-item» ><a href=«#»>Store</a></div>
<div class=«nav-item active» aria-current=«page»>Checkout</div>
</div>

<div class=«container»>
<h1>
<span>Checkout</span>
<span>$9.99</span>
</h1>

<form action=«receipt.php» method=«post» id=«the-form»>
<div class=«input input-text half-width»>
<span class=«input-label»>Fornavn</span>
<input class=«input-field» type=«text» placeholder=«John» name=«fname» autofocus>
</div>

<div class=«input» input-text half-width»>
<span class=«input-label»>Etternavn</span>
<input class=«input-field» type=«text» placeholder=«Smith» name=«lname»>
</div>

<div class=«input» input-text full width»>
<span class=«input-label>E-post adresse</span>
<input class=«input-field» type=«text» placeholder=«someone@example.com» name=«email»>
</div>

<div class=«input input-text full-width»>
<span class=«input-label»>Kortnummer</span>
<div id=«ccnumber»></div>
</div>

<div class=«input input-text half-width»>
<span class=«input-label»>Utløpsdato</span>
<div id=«ccexp»></div>
</div>

<div class=«input input-text half-width»>
<span class=«input-label»>CVV</span>
<div id=«cvv»></div>
</div>

<input class=«btn btn-mega» id=«payButton» type=«submit» value=«Submit Payment»>
</form>
</div>


RECEIPT page:
<?php>

$fname = $_POST[‘fname’];
$lname = $_POST[‘lname’];
$email = $_POST[‘email’];
$payment_token = $_POST[‘payment_token’];

$url = ‘https://secure.transactiongateway.com/api/transact.php';
$vars = «security_key=4KTHldjfkgkdlfjggldfjgk»
. «&type=sale»
. «&amount = 9.99»
. «&first_name=» . $fname
. «&last_name=» . $fname
. «&email=» . $email
. «&payment_token=» . $payment_token;

$ch = curl_init( $url );
curl_setopt($ch, CURLOPT_POST, 1);
curl_setopt($ch, CURLOPT_POSTFIELDS, $vars);
curl_setopt($ch, CURLOPT_FOLLOWLOCATION, 1);
curl_setopt($ch, CURLOPT_POST, 1);
curl_setopt($ch, CURLOPT_POST, 1);
curl_setopt($ch, CURLOPT_POST, 1);

*/
