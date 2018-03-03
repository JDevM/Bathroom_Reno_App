// Rought Data Structure for Bathroom Remodel Estimate App thing and stuff

// Object Structures

var permits_Data = {
    
    // Permit County and Quantity (User Input Data)
    county: "", // (Always NC)
    quantity: 0,
    
    // Storage for user input data and math operations
    mecklenburg_County_Estimated_Permit_Quantity: 0,
    union_County_Estimated_Permit_Quantity: 0,
    gaston_County_Estimated_Permit_Quantity: 0,
    york_County_Estimated_Permit_Quantity: 0,
    
    mecklenburg_County_Final_Permit_Quantity: 0,
    union_County_Final_Permit_Quantity: 0,
    gaston_County_Final_Permit_Quantity: 0,
    york_County_Final_Permit_Quantity: 0,
    county_NC: "",

    // Set prices (Permit Prices)
    mecklenburg_County_Permit_Cost: 0,    // unofficial - set and date if official price
    union_County_Permit_Cost: 0,    // unofficial - set and date if official price
    gaston_County_Permit_Cost: 0,    // unofficial - set and date if official price
    york_County_Permit_Cost: 0,    // unofficial - set and date if official price
    
    
    // Totals 
    estimated_Total_Cost: 0, // (Math Data from function)
    final_Total_Cost: 0,     // (User Input Data aka Final Tally)
    
}

var demo_Data = {

    // Labor (User Input Data)
    estimated_Days_Of_Labor: 0,
    final_Days_Of_Labor: 0,
    days_of_Labor_Incrementor: 0,
    
    // Dump trips (User Input Data)
    estimated_Dump_Trips: 0,
    final_Dump_Trips: 0,
    
    // Set Prices Labor + Expenses
    per_Day_Rate: 400,  // Dollars (2 Workers)
    dump_Trip_Cost: 40, // Dollars - Unofficial, but should be acurrate 2/14/18
    
    // Totals 
    estimated_Total_Cost: 0, // (Math Data from function)
    final_Total_Cost: 0,     // (User Input Data aka Final Tally)
    
}

var reconstruction_Data = {

    // Labor (User Input Data)
    estimated_Days: 0,
    final_Days: 0,
    day_Incrementor: 0,
    
    // Matterial (User Input Data)
    material_Estimated_Cost: 0,
    material_Final_Cost: 0,
    
    // Set Prices (Labor Cost)
    per_Day_Rate: 400, // Dollars (2 Workers)
    
    // Totals
    estimated_Total_Cost: 0, // (Math Data from function)
    final_Total_Cost: 0,     // (User Input Data aka Final Tally)
}

var cabinetry_Data = {
    // Use Cabinet Calculator App
    // It's complicated, but figure out 
    // a way to work its logic into an object here.
    
}

var custom_Trimwork_Data = {
    // Use trim calculator app with added features
    // It's complicated, but figure out 
    // a way to work its logic into an object here.
}

var custom_Mirrors_Data = {
    
}

var tops_Data = {
    
    // Tops (User input Data)
    top_Sq_Ft_Quantity: 0, 
    final_Top_Per_Sq_Ft_Cost: 0, // Get cost from the bill
    
    // Labor (User input Data) 
    // Subject to change (Get Estimate process from Sub (Ron Lansford))
    per_Day_Rate: 0, // Dollars
    estimated_Days_Of_Labor: 0,
    final_Days_Of_Labor: 0,
    days_of_Labor_Incrementor: 0,
    
    // Set prices
    client_Allowance_Per_Sq_Ft: 70, // Dollars (Our set price 2/14/18)
    per_Day_Rate: 0,                // Dollars (Set after talking to Ron)
    
    // Set Variables
    //estimated_Allowance: tops_Data.top_Sq_Ft_Quantity * tops_Data.client_Allowance_Per_Sq_Ft,
    
    // Totals
    estimated_Total_Cost: 0, // (Math Data from function)
    final_Total_Cost: 0,     // (User Input Data aka Final Tally)
}

var sink_Bowls_Data = {
    
    // Sink Bowls (User Input Data)
    quantity: 0,
    final_Per_Unit_Cost: 0, // Get cost from the bill
    
    // Labor (User Input Data)
    // Subject to change (Get Estimate process from Sub (Ron Lansford))
    per_Day_Rate: 0, // Dollars
    estimated_Days_Of_Labor: 0,
    final_Days_Of_Labor: 0,
    days_of_Labor_Incrementor: 0,
    
    // Set Variables
    //estimated_Allowance: sink_Bowls_Data.quantity * sink_Bowls_Data.client_Allowance_Per_Unit,
    
    // Set Prices
    client_Allowance_Per_Unit: 200, // (Double check)
}

var tile_Data = {
    
    // Labor (User Input Data)
    durock_Shield_Sq_Ft_Quantity: 0,
    bathroom_Floor_Sq_Ft_Quantity: 0,
    shower_Walls_Sq_Ft_Quantity: 0,
    shower_Pan_Tile_Sq_Ft_Quantity: 0,
    niche_Quantity: 0,
    bench_Quantity: 0,
    schluter_Quantity: 0,
    
    // Set Prices for Install
    durock_Shield_Per_Sq_Ft_Cost: 2,    // Dollars (2/1/18)
    bathroom_Floor_Per_Sq_Ft_Cost: 10,  // Dollars (2/1/18)
    shower_Walls_Per_Sq_Ft_Cost: 20,    // Dollars (2/1/18)
    shower_Pan_Tile_Per_Sq_Ft_Cost: 14, // Dollars (2/1/18)
    niche_Per_Unit_Cost: 300,           // Dollars ($200 - $300 TBE) 2/1/18)
    bench_Per_Unit_Cost: 150,           // Dollars (2/1/18)
    schluter_Strips_Per_Unit_Cost: 20,  // Dollars (2/1/18)
    
    // Totals
    estimated_Total_Cost: 0, // (Math Data from function)
    final_Total_Cost: 0,     // (User Input Data aka Final Tally)
}

var glass_Shower_Enclosures_Data = {
    
    // Labor (User Input Data)
    normal_Glass_Sq_Ft_Quantity: 0,
    notched_Glass_Sq_Ft_Quantity: 0,
    endurashield_Sq_Ft_Quantity: 0,
    panel_Unit_Quantity: 0,
    mirrors_Sq_Ft_Quantity: 0,
    
    // Set Prices for Install
    // *hardware and brackets included
    normal_Glass_Per_Sq_Ft_Cost: 40,  // Dollars (2/12/18)
    notched_Glass_Per_Sq_Ft_Cost: 45, // Dollars (2/12/18)
    endurashield_Per_Sq_Ft_Cost: 8,   // Dollars (2/12/18)
    panel_Per_Unit_Cost: 200,         // Dollars (2/12/18)
    mirrors_Per_Sq_Ft_Cost: 12.8,     // Dollars (2/12/18)
    
    // Totals
    estimated_Total_Cost: 0, // (Math Data from function)
    final_Total_Cost: 0,     // (User Input Data aka Final Tally)
}

var plumbing_Data = {
    
    // Labor (User Input Data)
    fixture_Unit_Quantity: 0,
    
    // Set Prices
    fixture_Per_Unit_Price: 150, // Dollars (rough estimate)
    
    // Totals
    estimated_Total_Cost: 0, // (Math Data from function)
    final_Total_Cost: 0,     // (User Input Data aka Final Tally)
    
}

var electrical_Data = {
    // No Info
    // Set appointment or call for info
}

var hvac_Data = {
    // No Info
    // Set appointment or call for info
}


var painting_Data = {
    // No Info
    // Set appointment or call for info
}

var profit_Margin;

var additionals = {
    
    // Arrays
    additional_Items_Array: [],
    additional_Items_Cost_Array: [],
    
    // (User Input)
    new_Additional_Item_Name: "",
    new_Additional_Item_Cost: "",
}