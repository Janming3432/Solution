Solutions Considered

1. Loading the Entire File into Memory

Approach: Read the entire 1TB file into memory, filter relevant log entries, and write them to an output file.

Pros: Simple and easy to implement.

Cons: Not feasible due to excessive memory usage, especially for a 1TB file.

2. Using Line-by-Line Streaming (Final Approach)

Approach: Utilize Node.js streams and the readline module to process the file line by line.

Pros:

Efficient in memory usage since it does not load the entire file into RAM.

Handles large files smoothly without performance bottlenecks.

Works in a single pass, ensuring optimal performance.

Cons:

Slightly more complex than reading the entire file at once.

Final Solution Summary

We chose the streaming approach using fs.createReadStream and readline for processing log files efficiently. This method ensures minimal memory usage while maintaining high performance. It reads each line sequentially, checks if the log starts with the specified date, and writes matching entries to an output file.

Steps to Run

Ensure Node.js is installed on your system.

Run the script using the command:

node ./src/extract_logs.js <log_file> <YYYY-MM-DD>

Example:

node .src/extract_logs.js test_logs.log 2024-12-01

The extracted logs will be saved in the output directory as output_YYYY-MM-DD.txt.

Error Handling

Checks if the input log file exists before processing.

Creates the output directory if it does not exist.

Ensures proper handling of file reading and writing operations to avoid crashes.

Conclusion

This approach ensures that large log files are processed efficiently, making it an optimal solution for handling 1TB log files with minimal resource consumption.
