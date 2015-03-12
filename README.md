# backbone-multistep-form
A multi-step form for backbone js.
####Usage:
#####Wrap your sections in:
    <div class="form-step" data-step=""></div>.
#####Make next and previous buttons like
    <div class="prev">Previous</div>
    <div class="next">Next</div>
#####Create a button with id=submit
    <div id="submit">Submit</div>
#####You can add validation by including parsley, and using, ie
    <input type="text" name="" data-parsley-required="true"/>
#####This form is automatically wired up with validation, breadcrumbs, etc, ie
    <form id="multi-step-form">
      <div class="form-step" data-step="1">
        <input type="text" name="first_name"/>
      </div>
      
      <div class="form-step" data-step="2">
        <input type="radio" name="employed" value="1"/>
        <input type="radio" name="employed" value="0"/>
      </div>
      
      <div class="form-step" data-step="3">
        <input type="checkbox" name="interests" value="dogs"/>
        <input type="checkbox" name="interests" value="cats"/>
      </div>
      
      <div class="form-step" data-step="4">
        <select name="country">
          <option value="US">United States</option>
          <option value="GE">Germany</option>
        </select>
        <div id="submit">Submit</div>
      </div>
      
      <div class="prev">Previous</div>
      <div class="next">Next</div>
    </form>
