import './Branding.css';
const Branding = ()=>{
    return (
        <>
        <section class="branding">
            <div class="row">
                <div class="col span_1_of_3">
                    <img src="./images/branding_service.png" alt="" class="box" />
                    <h3>Free Shipping</h3>
                    <p>Lorem Ipsum to your best content generator.</p>
                </div>
                <div class="col span_1_of_3">
                    <img src="./images/branding_money.png" alt="" class="box" />
                    <h3>21 Return Policy</h3>
                    <p>You can return your product within 21 days.</p>
                </div>
                <div class="col span_1_of_3">
                    <img src="./images/branding_work.png" alt="" class="box" />
                    <h3>24/7 Support</h3>
                    <p>We manage our customer restlessly,</p>
                </div>
            </div>
        </section>
        </>
    );
}

export default Branding;