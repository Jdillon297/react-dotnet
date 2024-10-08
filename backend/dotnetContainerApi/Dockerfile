# Step 1: Build environment
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /src

# Copy everything and restore dependencies
COPY . ./
RUN dotnet restore ./dotnetContainerApi.csproj

# Build and publish the project
RUN dotnet publish ./dotnetContainerApi.csproj -c release -o /dotnetContainerApi


# Step 2: Runtime environment
FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS runtime
WORKDIR /app
EXPOSE 8080
COPY --from=build /dotnetContainerApi .
ENTRYPOINT ["dotnet", "dotnetContainerApi.dll"]
