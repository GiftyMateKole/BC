

		
			<div data-role="header" style="text-shadow: none">
				<h1>EC</h1>
				<a href="index.html" data-role="button" data-icon="refresh" data-iconpos="notext" style="background: white;border: none;">Refresh</a>
			</div><!-- /header -->

			<div data-role="content" style="text-shadow: none">
				<div class="ui-field-contain">
					<fieldset data-role="controlgroup" data-type="horizontal" data-mini="true">
					<div>
						<select id="filter-menu" data-native-menu="false">
			<option value="accra">Greater Accra</option>
			<option value="north">Northern Region</option>
			<option value="west">Western Region</option>
			<option value="cent">Central Region</option>
			</select>
			</div> <br>
			
			<div>
			<select id="filter-menu" data-native-menu="false">
			<option value="accra">Constituency A</option>
			<option value="north">Constituency B</option>
			<option value="west">Constituency C</option>
			<option value="cent">Constituency D</option>
			</select>
			</div>
			
			AFP: <input type="text" name="AFP"><br>
			EOF: <input type="text" name="EOF"><br>
			GNU: <input type="text" name="GNU"><br>
					</fieldset>
				</div>
			</div>
			</div>
			
			<div data-role="page" id="results">

			<div data-role="header" style="text-shadow: none">
				<h1>EC</h1>
				<a href="index.html" data-role="button" data-icon="refresh" data-iconpos="notext" style="background: white;border: none;">Refresh</a>
			</div><!-- /header -->

			<div data-role="content" style="text-shadow: none">
				<div class="ui-field-contain">
					<fieldset data-role="controlgroup" data-type="horizontal" data-mini="true">
						<h3> AFP:</h3>
						<input type="text" name="AFP" value=10><br>
						<h3> EOF:</h3>
						<input type="text" name="EOF" value=50><br>
						<h3> GNU:</h3>
						<input type="text" name="GNU" value=100><br>
					</fieldset>
				</div>
			</div><!-- /content -->
		</div>
			
		<div data-role="page" id="declareRegions">

			<div data-role="header" style="text-shadow: none">
				<h1>EC</h1>
				<a href="index.html" data-role="button" data-icon="refresh" data-iconpos="notext" style="background: white;border: none;">Refresh</a>
			</div><!-- /header -->

			<div data-role="content" style="text-shadow: none">
				<div class="ui-field-contain">
					<fieldset data-role="controlgroup" data-type="horizontal" data-mini="true">
						<input type="radio" name="radio-choice-h-5" id="radio-choice-h-5a" value="on" checked="checked">
						<label for="radio-choice-h-5a">One</label>
						<input type="radio" name="radio-choice-h-5" id="radio-choice-h-5b" value="off">
						<label for="radio-choice-h-5b">Two</label>
						<input type="radio" name="radio-choice-h-5" id="radio-choice-h-5c" value="other">
						<label for="radio-choice-h-5c">Three</label>
					</fieldset>
				</div>
			</div><!-- /content -->
		