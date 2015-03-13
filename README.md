# backbone-multistep-form
A multi-step form for backbone js.
#####This form is automatically wired up with with multiple steps, breadcrumbs, and validation that makes sense.
    <form id="multi-step-form">
      <div class="breadcrumbs"></div>
      <div class="form-step" data-step="1">
        <input type="text" name="first_name" data-parsley-required="true"/>
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

####Usage:
#####Wrap your steps in:
    <div class="form-step" data-step=""></div>.
#####Make next and previous buttons with the .next and .prev class
    <div class="prev">Previous</div>
    <div class="next">Next</div>
#####Create a button with #submit id
    <div id="submit">Submit</div>
#####You can add validation by including parsley in your project, and using its standard DOM API
    <input type="text" name="" data-parsley-required="true"/>
#####You can add breadcrumbs by including an empty div with class .breadcrumbs
    <div class="breadcrumbs"></div>
