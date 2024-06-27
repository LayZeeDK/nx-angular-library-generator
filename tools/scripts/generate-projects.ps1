# Booking
nx g @nrwl-airlines/nx:angular-application booking-desktop --domain=booking
nx g @nrwl-airlines/nx:angular-application booking-mobile --domain=booking
nx g @nrwl-airlines/nx:angular-library --domain=booking --type=data-access --no-interactive
nx g @nrwl-airlines/nx:angular-library flight-search --domain=booking --type=feature
nx g @nrwl-airlines/nx:angular-library passenger-info --domain=booking --type=feature
nx g @nrwl-airlines/nx:angular-library shell --domain=booking --type=feature

# Check-in
nx g @nrwl-airlines/nx:angular-application check-in-desktop --domain=check-in
nx g @nrwl-airlines/nx:angular-application check-in-mobile --domain=check-in
nx g @nrwl-airlines/nx:angular-library --domain=check-in --type=data-access --no-interactive
nx g @nrwl-airlines/nx:angular-library shell --domain=check-in --type=feature

# Seatmap
nx g @nrwl-airlines/nx:angular-library --domain=seatmap --type=data-access --no-interactive
nx g @nrwl-airlines/nx:angular-library seat-listing --domain=seatmap --type=feature

# Shared
nx g @nrwl-airlines/nx:angular-library --domain=shared --type=data-access --no-interactive
nx g @nrwl-airlines/nx:angular-library buttons --domain=shared --type=ui
nx g @nrwl-airlines/nx:angular-library formatting --domain=shared --type=util
